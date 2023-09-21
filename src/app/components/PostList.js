import React from "react";
import AllPost from "./AllPost";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <AllPost posts={post} key={post.id} />;
      })}
    </>
  );
};

export default PostList;
