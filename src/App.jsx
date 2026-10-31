import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import "./App.css";

const STARTING_TASKS = [
  { id: 1, title: "Finish GT13", dueDate: "2026-10-21" },
  { id: 2, title: "Review Session 13", dueDate: "2026-10-22" },
  { id: 3, title: "Prepare for the Project Demo", dueDate: "2026-10-28" },
];

function App() {
  const [tasks, setTasks] = useState(STARTING_TASKS);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: "",
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="tasks-page">
      <h1>Task Manager</h1>
      <p className="count">{tasks.length} tasks</p>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;