"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

import { GlobalState } from "@/redux/types";
import { title } from "@/components/primitives";
import { setAuthStatus, setUser } from "@/redux/slices/globalVar";
import { validateUser } from "@/config/auth";
import ScreenLoader from "@/components/screenLoader";

export default function AboutPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state: GlobalState) => state.globalVar);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await validateUser();

      if (
        response &&
        response.status === 200 &&
        response.data.message === "Authorized"
      ) {
        dispatch(setAuthStatus(true));
        dispatch(setUser(response?.data.user));
      } else {
        dispatch(setAuthStatus(false));
      }

      setLoading(false);
    };
    checkAuth();
  }, [dispatch]);

  useEffect(() => {
    if (user?.isAdmin !== true) {
      router.push("/");
    }
  });

  if (loading) {
    return (
      <div className=" backdrop-blur-md w-full h-full flex items-center justify-center">
        <ScreenLoader />
      </div>
    );
  }

  return (
    <div>
      <h1 className={title()}>Admin</h1>
    </div>
  );
}
