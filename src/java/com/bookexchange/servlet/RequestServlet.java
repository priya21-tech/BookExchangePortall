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
 * Handles sending and responding to book exchange/purchase requests
 */
public class RequestServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("userId") == null) {
            response.sendRedirect("login");
            return;
        }

        String action = request.getParameter("action");

        if ("send".equals(action)) {
            sendRequest(request, response, session);
        } else if ("accept".equals(action) || "reject".equals(action)) {
            respondToRequest(request, response, session, action);
        }
    }

    private void sendRequest(HttpServletRequest request, HttpServletResponse response, HttpSession session)
            throws IOException {
        int requesterId = (int) session.getAttribute("userId");
        int bookId = Integer.parseInt(request.getParameter("bookId"));
        String message = request.getParameter("message");
        String offeredBookIdStr = request.getParameter("offeredBookId");

        try (Connection conn = DBUtil.getConnection()) {
            // Check if request already exists
            String checkSql = "SELECT id FROM requests WHERE book_id = ? AND requester_id = ? AND status = 'pending'";
            PreparedStatement checkPs = conn.prepareStatement(checkSql);
            checkPs.setInt(1, bookId);
            checkPs.setInt(2, requesterId);
            if (checkPs.executeQuery().next()) {
                response.sendRedirect("books?error=already_requested");
                return;
            }

            if (offeredBookIdStr != null && !offeredBookIdStr.isEmpty()) {
                int offeredBookId = Integer.parseInt(offeredBookIdStr);
                String sql = "INSERT INTO requests (book_id, requester_id, offered_book_id, message) VALUES (?, ?, ?, ?)";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setInt(1, bookId);
                ps.setInt(2, requesterId);
                ps.setInt(3, offeredBookId);
                ps.setString(4, message);
                ps.executeUpdate();
            } else {
                String sql = "INSERT INTO requests (book_id, requester_id, message) VALUES (?, ?, ?)";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setInt(1, bookId);
                ps.setInt(2, requesterId);
                ps.setString(3, message);
                ps.executeUpdate();
            }

            response.sendRedirect("books?success=requested");
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("books?error=failed");
        }
    }

    private void respondToRequest(HttpServletRequest request, HttpServletResponse response, HttpSession session, String action)
            throws IOException {
        int requestId = Integer.parseInt(request.getParameter("requestId"));

        try (Connection conn = DBUtil.getConnection()) {
            String status = "accept".equals(action) ? "accepted" : "rejected";
            String sql = "UPDATE requests SET status = ? WHERE id = ?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, status);
            ps.setInt(2, requestId);
            ps.executeUpdate();

            response.sendRedirect("myrequests?success=" + status);
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("myrequests");
        }
    }
}
