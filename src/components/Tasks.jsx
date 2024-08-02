import React, { useState } from "react";

const Tasks = ({ tasks, onComplete, onEdit, onUpdate, onDelete }) => {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString("ru-RU", options);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`task ${task.solved === "yes" ? "completed" : ""}`}
          data-id={index}
          style={{ display: task.editing ? "block" : "grid" }}
        >
          {task.editing ? (
            <TaskEditForm
              task={task}
              index={index}
              onUpdate={onUpdate}
              formatDate={formatDate}
            />
          ) : (
            <TaskView
              task={task}
              index={index}
              onComplete={onComplete}
              onEdit={onEdit}
              onDelete={onDelete}
              formatDate={formatDate}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const TaskEditForm = ({ task, index, onUpdate, formatDate }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const updatedTask = { ...editedTask, solved: task.solved };
    onUpdate(index, updatedTask);
  };

  return (
    <form className="task-edit" onSubmit={submit}>
      <input
        type="datetime-local"
        className="task__date"
        name="date"
        value={editedTask.date}
        onChange={inputChange}
        required
      />
      <button className="task__control btn-edit" type="submit">
        💾
      </button>
      <input
        type="text"
        className="task__title"
        name="title"
        value={editedTask.title}
        onChange={inputChange}
        required
      />
    </form>
  );
};

const TaskView = ({
  task,
  index,
  onComplete,
  onEdit,
  onDelete,
  formatDate,
}) => {
  return (
    <>
      <span
        className={`task__date ${task.solved === "yes" ? "completed" : ""}`}
      >
        {formatDate(task.date)}
      </span>
      <div className="task__control">
        <span
          className="ok"
          onClick={() => onComplete(index)}
          style={{
            display: task.solved === "yes" ? "none" : "inline-block",
          }}
        >
          ✔
        </span>
        <span className="edit" onClick={() => onEdit(index)}>
          ✎
        </span>
        <span className="del" onClick={() => onDelete(index)}>
          ✖
        </span>
      </div>
      <h2 className={`task__title ${task.solved === "yes" ? "completed" : ""}`}>
        {task.title}
      </h2>
    </>
  );
};

export default Tasks;
