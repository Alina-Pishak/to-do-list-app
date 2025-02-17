import { createAsyncThunk } from "@reduxjs/toolkit";

import { createTask, deleteTask, getTasks } from "../api/tasks";

import { ITask } from "@/types/task";

export const getTasksThunk = createAsyncThunk("tasks/getTasks", async () => {
  const tasks = await getTasks();
  return tasks;
});

export const createTaskThunk = createAsyncThunk(
  "tasks/createTask",
  async (newTask: ITask) => {
    const addedTodo = await createTask(newTask);
    return addedTodo;
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await deleteTask(id);
    return id;
  }
);
