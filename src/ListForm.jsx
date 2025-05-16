import React, { useState } from "react";
import toast from 'react-hot-toast';


const ListForm = (props) => {
  const [text,setTask] = useState("");
  const handleTextInput = (event) => {
    setTask(event.target.value);
  };
  const handleAddBtn = () => {
    if(text){
    props.addTask(text);
    setTask("");
    toast.success("List created");}
    else{
      toast.error("required at least one word or space")
    }
  };
  const handleEnter = (event) => {
    if(event.key === "Enter"){
      handleAddBtn()
    }
  }
  return (
    <div className="border-gray-400 border-2 rounded-full p-1 flex gap-1 mb-6">
      <input
        onKeyUp={handleEnter}
        onChange={handleTextInput}
        value={text}
        type="text"
        className="bg-gray-200 px-4 py-2 rounded-s-full focus:outline-none flex-grow placeholder:text-lg"
        placeholder="Enter your tasks"
      />
      <button 
      onClick={handleAddBtn}
      className="rounded-e-full px-4 py-1 bg-gray-800 active:scale-90 hover:bg-gray-700 duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 stroke-white pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default ListForm;
