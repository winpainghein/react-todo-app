import React, { useState } from "react";
import Heading from "./Heading";
import ListForm from "./ListForm";
import ListStatus from "./ListStatus";
import EmptyState from "./EmptyState";
import ListsGroup from "./ListsGroup";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      job: "to read",
      isDone: true,
    },
    {
      id: 2,
      job: "to eat",
      isDone: false,
    },
    {
      id: 3,
      job: "to walk",
      isDone: false,
    },
    {
      id: 4,
      job: "to run",
      isDone: false,
    },
    {
      id: 5,
      job: "to run",
      isDone: false,
    }
  ]);
  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => id !== task.id));
  };

  const editTask = (newJob, id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };

  return (
    <main className="min-h-screen w-screen flex justify-center items-center">
      <div className="max-w-[350px] h-[700px] py-5 rounded-md flex flex-col mx-auto">
        <Heading />
        <ListForm addTask={addTask} />
        <ListStatus tasks={tasks} />
        <ListsGroup
          tasks={tasks}
          checkTask={checkTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </main>
  );
};

export default App;
