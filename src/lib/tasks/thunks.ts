import { createAsyncThunk } from "@reduxjs/toolkit";

import { createTask, deleteTask, getTasks, updateTaskById } from "../api/tasks";

import { ITask, ITaskBodyOptional } from "@/types/task";

export const getTasksThunk = createAsyncThunk("tasks/getTasks", async () => {
  const tasks = await getTasks();
  return tasks;
});

export const createTaskThunk = createAsyncThunk(
  "tasks/createTask",
  async (newTask: ITask) => {
    const addedTask = await createTask(newTask);
    const updatedTask = await updateTaskById(addedTask.name, {
      id: addedTask.name,
    });
    return { ...newTask, ...updatedTask };
  }
);

export const updateTaskThunk = createAsyncThunk(
  "tasks/updateTask",
  async (updateTask: ITaskBodyOptional) => {
    await updateTaskById(updateTask.id, updateTask);
    return updateTask;
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    await deleteTask(id);
    return id;
  }
);
