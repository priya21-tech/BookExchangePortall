package com.bookexchange.servlet;

import com.bookexchange.util.DBUtil;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Handles adding new book listings
 */
public class AddBookServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("userId") == null) {
            response.sendRedirect("login");
            return;
        }
        request.getRequestDispatcher("addbook.jsp").forward(request, response);
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
        String title = request.getParameter("title");
        String author = request.getParameter("author");
        String condition = request.getParameter("condition");
        String type = request.getParameter("type");
        String priceStr = request.getParameter("price");
        String description = request.getParameter("description");

        double price = 0;
        if (priceStr != null && !priceStr.trim().isEmpty()) {
            try {
                price = Double.parseDouble(priceStr);
            } catch (NumberFormatException e) {
                price = 0;
            }
        }

        try (Connection conn = DBUtil.getConnection()) {
            String sql = "INSERT INTO books (title, author, book_condition, type, price, description, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, title);
            ps.setString(2, author);
            ps.setString(3, condition);
            ps.setString(4, type);
            ps.setDouble(5, price);
            ps.setString(6, description);
            ps.setInt(7, userId);
            ps.executeUpdate();

            response.sendRedirect("mybooks?success=added");

        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("error", "Failed to add book. Try again.");
            request.getRequestDispatcher("addbook.jsp").forward(request, response);
        }
    }
}
