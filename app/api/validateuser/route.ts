/* eslint-disable prettier/prettier */
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import prisma from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not set");
}

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get("reftoken")?.value;

  if (!refreshToken) {

    return NextResponse.json(
      { message: "Refresh token missing" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET) as jwt.JwtPayload;

    // Fetch user based on the decoded token's payload
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });

    if (!user || user.username !== decoded.username) {

      return NextResponse.json(
        { message: "Invalid token - user not found or mismatch" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Authorized", user });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      console.error("JWT Error:", error);

      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    } else if (error instanceof jwt.TokenExpiredError) {
      console.error("JWT Expired Error:", error);

      return NextResponse.json({ message: "Token expired" }, { status: 401 });
    } else {
      console.error("Token verification error:", error);

      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
