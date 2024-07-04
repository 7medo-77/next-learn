import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "@bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();

    // const name = body.name;
    // const userName = body.username;
    // const email = body.email;
    // const password = body.password;

    const { name, username, email, password } = body;

    const databaseUser = prisma.user.findUnique({
      where: {
        email: email,
        username: username,
      },
    });

    if (databaseUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name: name,
        username: userName,
        email: email,
        password: hashPassword,
      },
    });

    return NextResponse.json(
      {
        user: newUser,
        message: "User created successfully",
      },
      {
        status: "201",
      }
    );
  } catch (error) {}
}
