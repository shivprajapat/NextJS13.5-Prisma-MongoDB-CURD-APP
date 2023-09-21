import React from "react";

const Modal = ({ children, modelOpen, setModalOpen, title }) => {
  return (
    <>
      {modelOpen && (
        <div className="bg-black/50 fixed inset-0 ">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-end bg-slate-800 w-[450px] p-5">
              <div className="flex  mb-3 w-full justify-between">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-7 h-7 flex justify-center items-center text-white bg-pink-700 rounded-full cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206L56.6 43.5c-11.3-13.6-31.5-15.4-45.1-4.1S-3.9 70.9 7.4 84.5L150.3 256L7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306l135.4 162.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256L376.6 84.5z"
                    />
                  </svg>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
