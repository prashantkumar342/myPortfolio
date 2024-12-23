"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import CustomTab from "@/components/CustomTab";
import Login from "@/components/form/login";
import Register from "@/components/form/register";
import { setAuthStatus } from "@/redux/slices/globalVar";
import { validateUser } from "@/config/auth"; // Import the API call function
import ScreenLoader from "@/components/screenLoader";

export default function BlogPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // To check if the component is hydrated

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const checkAuth = async () => {
        const response = await validateUser();

        if (
          response &&
          response.status === 200 &&
          response.data.message === "Authorized"
        ) {
          setIsAuthenticated(true);
          dispatch(setAuthStatus(true));
          router.push("/");
        } else {
          dispatch(setAuthStatus(false));
        }

        setLoading(false);
      };

      checkAuth();
    }
  }, [dispatch, router, isHydrated]);

  if (!isHydrated || loading) {
    return (
      <div className=" backdrop-blur-md w-full h-full flex items-center justify-center">
        <ScreenLoader />
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div>
      <CustomTab
        tabs={[
          { title: "Login", description: <Login /> },
          { title: "Register", description: <Register /> },
        ]}
      />
    </div>
  );
}
