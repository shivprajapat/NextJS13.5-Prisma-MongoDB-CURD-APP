"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./button";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const AddPost = () => {
  const [modelOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = formData;
  const router = useRouter();
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
    const res = await axios.post("/api/todo", formData);
    if (res.status === 200) {
      setFormData({});
      setModalOpen(false);
      router.refresh();
      toast.success("Todo Create Successfully");
    }
  };
  return (
    <div>
      <Button onClick={modalHandler} title="Add New Post" bgGray />
      <Modal
        modelOpen={modelOpen}
        setModalOpen={setModalOpen}
        title="Add New Post"
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
              Description{" "}
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
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
