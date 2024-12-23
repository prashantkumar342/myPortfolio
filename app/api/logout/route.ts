/* eslint-disable prettier/prettier */
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Clear the refresh token cookie by setting it with an expired date
    const response = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    response.cookies.set("reftoken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
      expires: new Date(0), // Set the cookie to expire immediately
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
