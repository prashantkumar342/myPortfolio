/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from "@/redux/store";

// Define the types for the socket events
interface ServerToClientEvents {
  feedbackAck: (data: { message: string }) => void;
}

interface ClientToServerEvents {
  registerUser: (userId: string) => void;
  sendFeedback: (data: { feedbackMessage: string; sender: string }) => void;
}

const useSocket = ():
  | Socket<ServerToClientEvents, ClientToServerEvents>
  | undefined => {
  const { user } = useSelector((state: RootState) => state.globalVar);
  const socketRef = useRef<
    Socket<ServerToClientEvents, ClientToServerEvents> | undefined
  >(undefined);

  useEffect(() => {
    // Conditionally set the socket URL based on the environment
    const socketUrl =
      process.env.NODE_ENV === "production"
        ? process.env.SOCKET_URL
        : "http://localhost:4000"; // Local development server URL

    // Initialize the Socket.IO client
    socketRef.current = io(socketUrl!, {
      withCredentials: true,
      transports: ["websocket", "polling"],
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log(`Connected to server with ID: ${socket.id}`);
      if (user?.id) {
        socket.emit("registerUser", user.id);
      }
    });

    socket.on("feedbackAck", (data) => {
      console.log("Feedback acknowledgment received:", data.message);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });

    // Cleanup the socket connection on component unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [user?.id]); // Dependency array ensures the effect re-runs when user ID changes

  return socketRef.current;
};

export default useSocket;
