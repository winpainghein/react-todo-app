import React from "react";

const ListStatus = (props) => {
  return (
    <div className="flex justify-between mb-5">
      <p className="text-sm">Your Tasks</p>
      <p className="bg-gray-300 rounded-full px-2 py-0.5 text-sm">
        done <span className="text-sm">{props.tasks.filter(task => task.isDone === true).length}</span> / <span className="text-sm">{props.tasks.length}</span>
      </p>
    </div>
  );
};

export default ListStatus;
