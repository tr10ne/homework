import React, { useState, useEffect } from "react";
import Login from "./Login";
import Tasks from "./Tasks";
import { db, ref, set, get } from "../firebase";

const TasksManage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      const tasksRef = ref(db, "tasks");
      get(tasksRef).then((snapshot) => {
        if (snapshot.exists()) {
          setTasks(Object.values(snapshot.val()));
        } else {
          setTasks([]);
        }
      });
    }
  }, [isLoggedIn]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    const tasksRef = ref(db, "tasks");
    set(tasksRef, tasks).then(() => {
      setIsLoggedIn(false);
    });
  };

  const taskSubmit = (e) => {
    e.preventDefault();
    const newTask = { title: taskTitle, date: taskDate, solved: "no" };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskDate("");
  };

  const taskComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].solved = newTasks[index].solved === "yes" ? "no" : "yes";
    setTasks(newTasks);
  };

  const taskEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index].editing = true;
    setTasks(newTasks);
  };

  const taskUpdate = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    newTasks[index].editing = false;
    if (tasks[index].solved === "yes") {
      newTasks[index].solved = "no";
    }
    setTasks(newTasks);
  };

  const taskDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={login} />
      ) : (
        <div className="page">
          <h1 className="title">Список дел</h1>
          <button id="logout-btn" className="btn" onClick={logout}>
            Выйти
          </button>
          <form className="form" onSubmit={taskSubmit}>
            <label>
              <input
                className="form__input"
                id="task-title"
                type="text"
                placeholder="Название задачи"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                className="form__input"
                id="task-date"
                type="datetime-local"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                required
              />
            </label>
            <button className="btn" type="submit">
              Добавить
            </button>
          </form>
          <Tasks
            tasks={tasks}
            onComplete={taskComplete}
            onEdit={taskEdit}
            onUpdate={taskUpdate}
            onDelete={taskDelete}
          />
        </div>
      )}
    </div>
  );
};

export default TasksManage;
