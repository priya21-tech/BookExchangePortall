package com.bookexchange.servlet;

import com.bookexchange.util.DBUtil;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Handles editing existing book listings
 */
public class EditBookServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("userId") == null) {
            response.sendRedirect("login");
            return;
        }

        int bookId = Integer.parseInt(request.getParameter("id"));
        int userId = (int) session.getAttribute("userId");

        try (Connection conn = DBUtil.getConnection()) {
            String sql = "SELECT * FROM books WHERE id = ? AND owner_id = ?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, bookId);
            ps.setInt(2, userId);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                request.setAttribute("bookId", rs.getInt("id"));
                request.setAttribute("bookTitle", rs.getString("title"));
                request.setAttribute("bookAuthor", rs.getString("author"));
                request.setAttribute("bookCondition", rs.getString("book_condition"));
                request.setAttribute("bookType", rs.getString("type"));
                request.setAttribute("bookPrice", rs.getDouble("price"));
                request.setAttribute("bookDescription", rs.getString("description"));
                request.getRequestDispatcher("editbook.jsp").forward(request, response);
            } else {
                response.sendRedirect("mybooks");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("mybooks");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("userId") == null) {
            response.sendRedirect("login");
            return;
        }

        int userId = (int) session.getAttribute("userId");
        int bookId = Integer.parseInt(request.getParameter("bookId"));
        String title = request.getParameter("title");
        String author = request.getParameter("author");
        String condition = request.getParameter("condition");
        String type = request.getParameter("type");
        String priceStr = request.getParameter("price");
        String description = request.getParameter("description");

        double price = 0;
        if (priceStr != null && !priceStr.trim().isEmpty()) {
            try { price = Double.parseDouble(priceStr); } catch (NumberFormatException e) { price = 0; }
        }

        try (Connection conn = DBUtil.getConnection()) {
            String sql = "UPDATE books SET title=?, author=?, book_condition=?, type=?, price=?, description=? WHERE id=? AND owner_id=?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, title);
            ps.setString(2, author);
            ps.setString(3, condition);
            ps.setString(4, type);
            ps.setDouble(5, price);
            ps.setString(6, description);
            ps.setInt(7, bookId);
            ps.setInt(8, userId);
            ps.executeUpdate();

            response.sendRedirect("mybooks?success=updated");
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("mybooks");
        }
    }
}
