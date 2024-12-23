/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [registerLoading, setRegisterLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }));
  };

  // Handle register submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state
    setRegisterLoading(true); // Set loading state

    try {
      // Call register API (use full URL in production)
      const apiURL = process.env.NEXT_PUBLIC_DOMAIN_URL
        ? `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/reguser`
        : "/api/reguser";

      const response = await axios.post(apiURL, userCreds, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        toast.success("User registered successfully!");
        setUserCreds({
          username: "",
          password: "",
          email: "",
        });
      }
    } catch (error: any) {
      // Set error message
      const errorMessage = error.response?.data?.error || "Registration failed";
      setError(errorMessage);
      toast.error(errorMessage);

      // Log error details for monitoring (optional)
      console.error("Registration error:", error);
    } finally {
      setRegisterLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-4">
      <form className="flex flex-col gap-5" onSubmit={handleRegister}>
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
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={userCreds.email}
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid password"
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Set your password"
          type="password"
          value={userCreds.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button color="primary" isLoading={registerLoading} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
