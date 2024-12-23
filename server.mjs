/* eslint-disable prettier/prettier */
import { createServer } from "http";

import express from "express";
import { Server } from "socket.io";
import next from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const userSocketMap = new Map();

app.prepare().then(() => {
  const server = express();
  const httpServer = createServer(server);

  // Configure Socket.IO with CORS
  const io = new Server(httpServer, {
    cors: {
      origin: dev
        ? "http://localhost:3000"
        : "https://prashantportfolio-smoky.vercel.app",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // Socket.IO connection handler
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Register user to socket ID mapping
    socket.on("registerUser", (userId) => {
      userSocketMap.set(userId, socket.id);
    });

    socket.on("sendFeedback", async (data) => {
      try {
        if (data.feedbackMessage && data.feedbackMessage.trim() !== "") {
          // Save feedback to the database
          const feedback = await prisma.feedback.create({
            data: {
              feedbackMessage: data.feedbackMessage,
              sender: data.sender,
            },
          });

          const senderSocketId = userSocketMap.get(data.sender);

          if (senderSocketId) {
            io.to(senderSocketId).emit("feedbackAck", {
              message: "Feedback Sent Successfully",
            });
          } else {
            console.warn(`Sender socket ID not found for user: ${data.sender}`);
          }
        } else {
          console.warn("Feedback message is empty. Feedback not saved.");
        }
      } catch (error) {
        console.error("Error saving feedback:", error);
      }
    });

    // Handle disconnection and cleanup
    socket.on("disconnect", () => {
      for (const [userId, socketId] of userSocketMap.entries()) {
        if (socketId === socket.id) {
          userSocketMap.delete(userId);
          console.log(`User ${userId} disconnected and removed from map`);
          break;
        }
      }
    });
  });

  // Handle Next.js requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the HTTP server
  const PORT = process.env.PORT || 3000;

  httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
