import React, { useState } from "react";

const Lists = (props) => {
  // const [check,setCheck] = useState(false);

  const [isEdit, setEdit] = useState(false);

  const [newJob,setNewJob] = useState(props.job);

  const handleCheckbox = () => {
    props.checkTask(props.id);
  };

  const handleDelBtn = () => {
    if (confirm("Are you sure to delete")) {
      props.deleteTask(props.id);
    }
  };

  const handleEditBtn = () => {
    setEdit(true);
  };

  const handleNewJobInput = (event) => {
     setNewJob(event.target.value)
  };

  const handleNewJobInputUpdate = (event) => {
     if(event.key === "Escape"){
      props.editTask(newJob,props.id);
      setEdit(false);
     }

  };

  return (
    <div
      className={`group bg-gray-200 flex justify-between items-center p-2 rounded-md overflow-hidden duration-200 ${
        props.isDone ? "bg-gray-200 opacity-40 scale-90 pointer-events-none" : ""
      }`}
    >
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={props.isDone}
          onChange={handleCheckbox}
          disabled = {isEdit}
        />
        {isEdit ? (
          <input
            type="text"
            value={newJob}
            onChange={handleNewJobInput}
            onKeyUp={handleNewJobInputUpdate}
            className="border text-sm py-1 px-2"
          />
        ) : (
          <p className={`text-sm ${props.isDone && "line-through"}`}>
            {props.job}
          </p>
        )}
      </div>
      <div className="flex gap-2 translate-x-[120%] group-hover:translate-x-0 duration-300">
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
      </div>
    </div>
  );
};

export default Lists;
