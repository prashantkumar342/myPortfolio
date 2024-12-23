/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { setAuthStatus } from "@/redux/slices/globalVar";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserCreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }));
  };

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    setLoginLoading(true); // Set loading state

    try {
      // Call login API (use full URL in production)
      const apiURL = process.env.NEXT_PUBLIC_DOMAIN_URL
        ? `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/loginuser`
        : "/api/loginuser";

      const response = await axios.post(apiURL, userCreds, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Ensure cookies are sent for session handling
      });

      if (response.status === 200) {
        // Dispatch authentication status
        dispatch(setAuthStatus(true));

        // Show success toast and redirect
        toast.success("Login successful!");
        router.push("/"); // Redirect to home
      }
    } catch (error: any) {
      // Set error message
      const errorMessage =
        error.response?.data?.message || "An error occurred during login.";

      setError(errorMessage);
      toast.error(errorMessage);

      console.error("Login error:", error);
    } finally {
      setLoginLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-4">
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your username"
          type="text"
          value={userCreds.username}
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={userCreds.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button color="primary" isLoading={loginLoading} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
