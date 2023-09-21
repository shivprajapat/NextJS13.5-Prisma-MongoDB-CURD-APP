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

// PATCH Single Request

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { id } = params;
    const { title, description } = body;

    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    if (!updatePost) {
      return NextResponse.json({ message: "post not found" }, { status: 404 });
    }
    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse(
      { message: "update post error", error },
      { status: 500 }
    );
  }
};

// DELETE Single Request
export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const updatePost = await prisma.post.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: "your data has been deleted!" });
  } catch (error) {
    return NextResponse(
      { message: "post delete error", error },
      { status: 500 }
    );
  }
};
