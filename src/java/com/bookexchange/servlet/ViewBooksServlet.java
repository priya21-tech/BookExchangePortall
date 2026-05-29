package com.bookexchange.servlet;

import com.bookexchange.util.DBUtil;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Retrieves and displays all active book listings
 */
public class ViewBooksServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("userId") == null) {
            response.sendRedirect("login");
            return;
        }

        String search = request.getParameter("search");
        String filterType = request.getParameter("filterType");

        try (Connection conn = DBUtil.getConnection()) {
            StringBuilder sql = new StringBuilder(
                "SELECT b.*, u.name AS owner_name FROM books b " +
                "JOIN users u ON b.owner_id = u.id WHERE b.is_active = TRUE"
            );
            List<Object> params = new ArrayList<>();

            if (search != null && !search.trim().isEmpty()) {
                sql.append(" AND (b.title LIKE ? OR b.author LIKE ?)");
                params.add("%" + search.trim() + "%");
                params.add("%" + search.trim() + "%");
            }

            if (filterType != null && !filterType.trim().isEmpty() && !"all".equals(filterType)) {
                sql.append(" AND b.type = ?");
                params.add(filterType);
            }

            sql.append(" ORDER BY b.created_at DESC");

            PreparedStatement ps = conn.prepareStatement(sql.toString());
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            ResultSet rs = ps.executeQuery();

            List<Map<String, Object>> books = new ArrayList<>();
            while (rs.next()) {
                Map<String, Object> book = new HashMap<>();
                book.put("id", rs.getInt("id"));
                book.put("title", rs.getString("title"));
                book.put("author", rs.getString("author"));
                book.put("condition", rs.getString("book_condition"));
                book.put("type", rs.getString("type"));
                book.put("price", rs.getDouble("price"));
                book.put("description", rs.getString("description"));
                book.put("ownerId", rs.getInt("owner_id"));
                book.put("ownerName", rs.getString("owner_name"));
                book.put("createdAt", rs.getTimestamp("created_at"));
                books.add(book);
            }

            request.setAttribute("books", books);

            // Fetch current user's books to offer for exchange
            int currentUserId = (int) session.getAttribute("userId");
            String myBooksSql = "SELECT id, title FROM books WHERE owner_id = ? AND is_active = TRUE AND type = 'exchange'";
            PreparedStatement myBooksPs = conn.prepareStatement(myBooksSql);
            myBooksPs.setInt(1, currentUserId);
            ResultSet myBooksRs = myBooksPs.executeQuery();
            List<Map<String, Object>> myBooks = new ArrayList<>();
            while (myBooksRs.next()) {
                Map<String, Object> mb = new HashMap<>();
                mb.put("id", myBooksRs.getInt("id"));
                mb.put("title", myBooksRs.getString("title"));
                myBooks.add(mb);
            }
            request.setAttribute("myBooks", myBooks);

            request.setAttribute("search", search);
            request.setAttribute("filterType", filterType);
            request.getRequestDispatcher("books.jsp").forward(request, response);

        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("error", "Failed to load books.");
            request.getRequestDispatcher("books.jsp").forward(request, response);
        }
    }
}
