"use client";
import { Button } from "@/components/ui/Button/Button";
import { useAppDispatch } from "@/lib/hooks";
import { createTaskThunk, getTasksThunk } from "@/lib/tasks/thunks";
import { TaskStatus } from "@/types/status";
import { ITask } from "@/types/task";
import React, { useState } from "react";

export const AddTaskForm = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    const newTask: ITask = {
      id: "",
      title,
      status: TaskStatus.NOT_COMPLETED,
      created: new Date().toISOString(),
    };

    try {
      await dispatch(getTasksThunk());

      await dispatch(createTaskThunk(newTask));
      setTitle("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to add task");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button type="submit">Create Task</Button>
    </form>
  );
};
