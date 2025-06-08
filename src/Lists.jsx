import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Lists = ({
  task: { id, job, isDone },
  editTask,
  deleteTask,
  checkTask,
}) => {
  const inputRef = useRef(null);
  const [isEdit, setEdit] = useState(false);

  const [newJob, setNewJob] = useState(job);

  const handleCheckbox = () => {
    checkTask(id);
  };

  const handleDelBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        toast.success("List deleted");
      }
    });
  };

  const handleEditBtn = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
    setNewJob(job);
  };

  const saveEdit = () => {
    editTask(newJob, id);
    setEdit(false);
  };

  const handleNewJobInput = (event) => {
    setNewJob(event.target.value);
  };

  const handleNewJobInputUpdate = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      editTask(newJob, id);
      !newJob && deleteTask(id);
      setEdit(false);
    }
  };

  const handleBlur = () => {
    editTask(newJob, id);
    !newJob && deleteTask(id);
    setEdit(false);
  };

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div
      className={`group animate__animated animate__fadeIn flex justify-between items-center p-2 flex-shrink-0 rounded-md overflow-hidden duration-200 ${
        isDone ? "bg-gray-200 scale-95" : "bg-gray-100"
      }`}
    >
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleCheckbox}
          disabled={isEdit}
        />
        {isEdit ? (
          <input
            ref={inputRef}
            type="text"
            value={newJob}
            onChange={handleNewJobInput}
            onKeyUp={handleNewJobInputUpdate}
            // onBlur={handleBlur}
            className="border focus:outline-none text-sm py-1 px-2 rounded-md"
          />
        ) : (
          <p
            className={`text-base w-[203px] overflow-x-scroll hide-scrollbar text-nowrap ${
              isDone && "line-through text-gray-500"
            }`}
          >
            {job}
          </p>
        )}
      </div>
      <div className="flex gap-2 translate-x-[120%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ease-in-out duration-500">
        {isEdit ? (
          <>
            <button
              onClick={saveEdit}
              className="border-2 border-gray-300 w-7 h-7 flex justify-center items-center rounded-full active:scale-90 hover:text-yellow-500 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
            <button
              onClick={cancelEdit}
              className="border-2 border-gray-300 w-7 h-7 flex justify-center items-center rounded-full active:scale-90 hover:text-red-500 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditBtn}
              className="border-2 border-gray-300 p-1 rounded-full active:scale-90 hover:text-blue-500 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button
              onClick={handleDelBtn}
              className="border-2 border-gray-300 p-1 rounded-full active:scale-90 hover:text-red-500 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Lists;
