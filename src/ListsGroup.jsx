import React from "react";
import EmptyState from "./EmptyState";
import Lists from "./Lists";

const ListsGroup = ({ tasks, editTask, deleteTask, checkTask }) => {
  return (
    <div className="flex flex-col gap-3 h-full overflow-y-scroll hide-scrollbar">
      <EmptyState />
      {tasks.map((task) => (
        <Lists
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          checkTask={checkTask}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default ListsGroup;
