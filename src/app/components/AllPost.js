import React from "react";

const AllPost = ({ posts }) => {
  const { title, description } = posts;
  return (
    <div className="md:w-80 xl:w-72 p-6 bg-slate-700 border border-slate-500 rounded-lg shadow-sm">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-slate-200">{description}</p>
      <div className="flex gap-2">
        <button
          type="button"
          className="px-3 py-2 text-white bg-green-600 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
            />
          </svg>
        </button>
        <button
          type="button"
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
  );
};

export default AllPost;
