import React from "react";
import PostList from "./PostList";
import AddPost from "./AddPost";

const getPost = async () => {
  const res = await fetch("http://localhost:3000/api/todo", { method: "GET" ,cache:'no-store'});
  return res.json();
};
const Post = async () => {
  const posts = await getPost();
  return (
    <div className="container mx-auto">
      <div className="mb-5 text-center flex flex-wrap justify-between items-center gap-5">
        <h1 className="text-xl xl:text-3xl font-bold text-white">
          NextJS 13.5 Prisma & MongoDB CURD APP
        </h1>
        <AddPost />
      </div>
      <div className="flex flex-wrap gap-3">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Post;
