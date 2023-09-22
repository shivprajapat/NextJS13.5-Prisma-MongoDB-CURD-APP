"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Modal from "./Modal";
import Button from "./button";

const AllPost = ({ posts }) => {
  const router = useRouter();
  const [modelOpen, setModalOpen] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [formData, setFormData] = useState(posts);
  const { title, description } = formData;
  const modalHandler = () => {
    setModalOpen(true);
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.patch(`/api/todo/${posts.id}`, formData);
    if (res) {
      setModalOpen(false);
      toast.success("Todo Update Successfully");
      router.refresh();
    } else {
      toast.error("something went wrong");
    }
  };

  const deleteHandler = async (id) => {
    const res = await axios.delete(`/api/todo/${id}`);
    if (res) {
      setDeletePost(false);
      router.refresh();
      toast.success("Todo Deleted Successfully");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <div className="md:w-1/2 p-1.5">
        <div className="p-6 bg-slate-700 border border-slate-500 rounded-lg shadow-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {posts.title}
          </h5>
          <p className="mb-3 font-normal text-slate-200">{posts.description}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={modalHandler}
              className="px-3 py-2 text-white bg-blue-700 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1l-1-1l-16-16l-96-96l-17-17l52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17l96 96l16 16l1 1l-17 17l-171.5 171.4c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128L241 114.9z"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setDeletePost(true)}
              className="px-3 py-2 text-white bg-red-500 rounded-full"
            >
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Modal
        modelOpen={modelOpen}
        setModalOpen={setModalOpen}
        title="Update Post"
      >
        <form className="w-full text-left" onSubmit={onSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-slate-200">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium  text-slate-200">
              Description
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={description}
              onChange={onChange}
            />
          </div>
          <div>
            <Button title="Update" type="submit" />
          </div>
        </form>
      </Modal>

      <Modal
        modelOpen={deletePost}
        setModalOpen={setDeletePost}
        title="Are you sure you want to delete this post?"
      >
        <div className="flex gap-5">
          <Button onClick={() => setDeletePost(false)} title="No" bgGray />
          <Button onClick={() => deleteHandler(posts.id)} title="Yes" />
        </div>
      </Modal>
    </>
  );
};

export default AllPost;
