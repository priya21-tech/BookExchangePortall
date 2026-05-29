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
 * Handles deletion of book listings
 */
public class DeleteBookServlet extends HttpServlet {

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
        String role = (String) session.getAttribute("userRole");

        try (Connection conn = DBUtil.getConnection()) {
            String sql;
            PreparedStatement ps;

            if ("admin".equals(role)) {
                sql = "DELETE FROM books WHERE id = ?";
                ps = conn.prepareStatement(sql);
                ps.setInt(1, bookId);
            } else {
                sql = "DELETE FROM books WHERE id = ? AND owner_id = ?";
                ps = conn.prepareStatement(sql);
                ps.setInt(1, bookId);
                ps.setInt(2, userId);
            }
            ps.executeUpdate();

            if ("admin".equals(role)) {
                response.sendRedirect("admin?success=deleted");
            } else {
                response.sendRedirect("mybooks?success=deleted");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("mybooks");
        }
    }
}
