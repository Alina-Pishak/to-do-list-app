import { createSlice } from "@reduxjs/toolkit";

import { createTaskThunk, deleteTaskThunk, getTasksThunk } from "./thunks";

import { ITaskState } from "@/types/task";

const initialState: ITaskState = {
  tasks: [],
  status: "idle",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTasksThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = action.payload;
      })
      .addCase(getTasksThunk.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createTaskThunk.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
