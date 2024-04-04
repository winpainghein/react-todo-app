import React from "react";
import EmptyState from "./EmptyState";
import Lists from "./Lists";

const ListsGroup = (props) => {
  return (
    <div className="bg-gray-100 p-3 rounded-md flex flex-col gap-3">
      <EmptyState />
      {props.tasks.map((task) => (
        <Lists
          editTask = {props.editTask}
          deleteTask = {props.deleteTask}
          checkTask={props.checkTask}
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
