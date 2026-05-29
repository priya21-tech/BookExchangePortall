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

public class DeleteRequestServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || !"admin".equals(session.getAttribute("userRole"))) {
            response.sendRedirect("login");
            return;
        }

        String idParam = request.getParameter("id");
        if (idParam != null) {
            try (Connection conn = DBUtil.getConnection()) {
                String sql = "DELETE FROM requests WHERE id = ?";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setInt(1, Integer.parseInt(idParam));
                ps.executeUpdate();
                response.sendRedirect("admin?success=request_deleted");
                return;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        response.sendRedirect("admin");
    }
}
