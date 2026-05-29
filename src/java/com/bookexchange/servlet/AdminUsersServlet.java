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
 * Admin user management - view and delete users
 */
public class AdminUsersServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || !"admin".equals(session.getAttribute("userRole"))) {
            response.sendRedirect("login");
            return;
        }

        String deleteId = request.getParameter("delete");

        try (Connection conn = DBUtil.getConnection()) {
            if (deleteId != null) {
                String delSql = "DELETE FROM users WHERE id = ? AND role != 'admin'";
                PreparedStatement delPs = conn.prepareStatement(delSql);
                delPs.setInt(1, Integer.parseInt(deleteId));
                delPs.executeUpdate();
            }

            String sql = "SELECT * FROM users ORDER BY created_at DESC";
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            List<Map<String, Object>> users = new ArrayList<>();
            while (rs.next()) {
                Map<String, Object> user = new HashMap<>();
                user.put("id", rs.getInt("id"));
                user.put("name", rs.getString("name"));
                user.put("email", rs.getString("email"));
                user.put("role", rs.getString("role"));
                user.put("createdAt", rs.getTimestamp("created_at"));
                users.add(user);
            }

            request.setAttribute("allUsers", users);
            request.getRequestDispatcher("/admin_users.jsp").forward(request, response);

        } catch (Exception e) {
            e.printStackTrace();
            request.getRequestDispatcher("/admin_users.jsp").forward(request, response);
        }
    }
}
