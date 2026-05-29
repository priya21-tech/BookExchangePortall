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
 * Shows requests received on the user's books + requests sent by the user
 */
public class MyRequestsServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("userId") == null) {
            response.sendRedirect("login");
            return;
        }

        int userId = (int) session.getAttribute("userId");

        try (Connection conn = DBUtil.getConnection()) {
            // Requests received on my books
            String receivedSql = "SELECT r.*, b.title AS book_title, u.name AS requester_name, ob.title AS offered_book_title " +
                "FROM requests r JOIN books b ON r.book_id = b.id " +
                "JOIN users u ON r.requester_id = u.id " +
                "LEFT JOIN books ob ON r.offered_book_id = ob.id " +
                "WHERE b.owner_id = ? ORDER BY r.created_at DESC";
            PreparedStatement ps1 = conn.prepareStatement(receivedSql);
            ps1.setInt(1, userId);
            ResultSet rs1 = ps1.executeQuery();

            List<Map<String, Object>> received = new ArrayList<>();
            while (rs1.next()) {
                Map<String, Object> req = new HashMap<>();
                req.put("id", rs1.getInt("id"));
                req.put("bookTitle", rs1.getString("book_title"));
                req.put("requesterName", rs1.getString("requester_name"));
                req.put("message", rs1.getString("message"));
                req.put("offeredBookTitle", rs1.getString("offered_book_title"));
                req.put("status", rs1.getString("status"));
                req.put("createdAt", rs1.getTimestamp("created_at"));
                received.add(req);
            }

            // Requests I sent
            String sentSql = "SELECT r.*, b.title AS book_title, u.name AS owner_name, ob.title AS offered_book_title " +
                "FROM requests r JOIN books b ON r.book_id = b.id " +
                "JOIN users u ON b.owner_id = u.id " +
                "LEFT JOIN books ob ON r.offered_book_id = ob.id " +
                "WHERE r.requester_id = ? ORDER BY r.created_at DESC";
            PreparedStatement ps2 = conn.prepareStatement(sentSql);
            ps2.setInt(1, userId);
            ResultSet rs2 = ps2.executeQuery();

            List<Map<String, Object>> sent = new ArrayList<>();
            while (rs2.next()) {
                Map<String, Object> req = new HashMap<>();
                req.put("id", rs2.getInt("id"));
                req.put("bookTitle", rs2.getString("book_title"));
                req.put("ownerName", rs2.getString("owner_name"));
                req.put("message", rs2.getString("message"));
                req.put("offeredBookTitle", rs2.getString("offered_book_title"));
                req.put("status", rs2.getString("status"));
                req.put("createdAt", rs2.getTimestamp("created_at"));
                sent.add(req);
            }

            request.setAttribute("receivedRequests", received);
            request.setAttribute("sentRequests", sent);
            request.getRequestDispatcher("myrequests.jsp").forward(request, response);

        } catch (Exception e) {
            e.printStackTrace();
            request.getRequestDispatcher("myrequests.jsp").forward(request, response);
        }
    }
}
