/* eslint-disable prettier/prettier */
// api/auth.ts
import axios from "axios";

export const validateUser = async () => {
  try {
    const response = await axios.post(
      "/api/validateuser",
      {},
      { withCredentials: true },
    );

    return response;
  } catch (error) {
    console.error("Error during authentication:", error);

    return null;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      "/api/logout",
      {},
      { withCredentials: true },
    );

    return response;
  } catch (error) {
    console.error("Error during logout:", error);

    return null;
  }
};
