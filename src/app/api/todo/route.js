import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

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
    return NextResponse({ message: "post error", error }, { status: 500 });
  }
};

// GET Request

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "get error", error }, { status: 500 });
  }
};
