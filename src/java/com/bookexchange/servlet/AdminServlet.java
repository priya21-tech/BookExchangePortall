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
 * Admin panel - view all listings, manage content
 */
public class AdminServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || !"admin".equals(session.getAttribute("userRole"))) {
            response.sendRedirect("login");
            return;
        }

        try (Connection conn = DBUtil.getConnection()) {
            // All books
            String booksSql = "SELECT b.*, u.name AS owner_name FROM books b JOIN users u ON b.owner_id = u.id ORDER BY b.created_at DESC";
            PreparedStatement ps1 = conn.prepareStatement(booksSql);
            ResultSet rs1 = ps1.executeQuery();

            List<Map<String, Object>> books = new ArrayList<>();
            while (rs1.next()) {
                Map<String, Object> book = new HashMap<>();
                book.put("id", rs1.getInt("id"));
                book.put("title", rs1.getString("title"));
                book.put("author", rs1.getString("author"));
                book.put("condition", rs1.getString("book_condition"));
                book.put("type", rs1.getString("type"));
                book.put("price", rs1.getDouble("price"));
                book.put("ownerName", rs1.getString("owner_name"));
                book.put("isActive", rs1.getBoolean("is_active"));
                book.put("createdAt", rs1.getTimestamp("created_at"));
                books.add(book);
            }

            // Stats
            String statsSql = "SELECT " +
                "(SELECT COUNT(*) FROM users WHERE role='user') AS totalUsers, " +
                "(SELECT COUNT(*) FROM books) AS totalBooks, " +
                "(SELECT COUNT(*) FROM requests) AS totalRequests, " +
                "(SELECT COUNT(*) FROM requests WHERE status='accepted') AS acceptedRequests";
            PreparedStatement ps2 = conn.prepareStatement(statsSql);
            ResultSet rs2 = ps2.executeQuery();

            if (rs2.next()) {
                request.setAttribute("totalUsers", rs2.getInt("totalUsers"));
                request.setAttribute("totalBooks", rs2.getInt("totalBooks"));
                request.setAttribute("totalRequests", rs2.getInt("totalRequests"));
                request.setAttribute("acceptedRequests", rs2.getInt("acceptedRequests"));
            }

            // All requests
            String reqSql = "SELECT r.*, b.title AS book_title, u.name AS requester_name, o.name AS owner_name, ob.title AS offered_book_title " +
                            "FROM requests r " +
                            "JOIN books b ON r.book_id = b.id " +
                            "JOIN users u ON r.requester_id = u.id " +
                            "JOIN users o ON b.owner_id = o.id " +
                            "LEFT JOIN books ob ON r.offered_book_id = ob.id " +
                            "ORDER BY r.created_at DESC LIMIT 100";
            PreparedStatement ps3 = conn.prepareStatement(reqSql);
            ResultSet rs3 = ps3.executeQuery();
            
            List<Map<String, Object>> allRequests = new ArrayList<>();
            while (rs3.next()) {
                Map<String, Object> req = new HashMap<>();
                req.put("id", rs3.getInt("id"));
                req.put("bookTitle", rs3.getString("book_title"));
                req.put("requesterName", rs3.getString("requester_name"));
                req.put("ownerName", rs3.getString("owner_name"));
                req.put("message", rs3.getString("message"));
                req.put("offeredBookTitle", rs3.getString("offered_book_title"));
                req.put("status", rs3.getString("status"));
                req.put("createdAt", rs3.getTimestamp("created_at"));
                allRequests.add(req);
            }
            request.setAttribute("allRequests", allRequests);

            request.setAttribute("allBooks", books);
            request.getRequestDispatcher("admin.jsp").forward(request, response);

        } catch (Exception e) {
            e.printStackTrace();
            request.getRequestDispatcher("admin.jsp").forward(request, response);
        }
    }
}
