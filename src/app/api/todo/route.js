import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

// POST Request

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { title, description } = body;
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse(
      { message: "post error", error: error },
      { status: 500 }
    );
  }
};
