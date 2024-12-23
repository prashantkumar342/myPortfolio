/* eslint-disable prettier/prettier */
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello, world!" });
}
