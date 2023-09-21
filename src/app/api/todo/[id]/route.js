import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

// GET Single Request

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const singlePost = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!singlePost) {
      return NextResponse.json({ message: "post not found" }, { status: 404 });
    }
    return NextResponse.json(singlePost);
  } catch (error) {
    return NextResponse({ message: "get post error", error }, { status: 500 });
  }
};
