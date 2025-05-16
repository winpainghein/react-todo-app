import React from "react";
import EmptyState from "./EmptyState";
import Lists from "./Lists";

const ListsGroup = ({ tasks, editTask, deleteTask, checkTask }) => {
  return (
    <div
      className={`bg-gray-100 p-3 rounded-md flex flex-col gap-3 h-full ${
        tasks.length > 9 && "overflow-y-scroll"
      }`}
    >
      <EmptyState />
      {tasks.map((task) => (
        <Lists
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          checkTask={checkTask}
          key={task.id}
          id={task.id}
          job={task.job}
          isDone={task.isDone}
        />
      ))}
    </div>
  );
};

export default ListsGroup;
