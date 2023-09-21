import React from "react";

const Button = ({ title, bgGray, ...rest }) => {
  return (
    <button
      className={`px-4 py-2 text-white rounded-lg ${
        bgGray ? "bg-slate-600" : "bg-red-500"
      }`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
