import { useAppDispatch } from "@/lib/hooks";
import { deleteTaskThunk, updateTaskThunk } from "@/lib/tasks/thunks";
import { TaskStatus } from "@/types/status";
import { ITask, ITaskBodyOptional } from "@/types/task";
import React, { FC } from "react";

interface ITaskListItem {
  task: ITask;
}

export const TaskListItem: FC<ITaskListItem> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = async (id: string) => {
    await dispatch(deleteTaskThunk(id));
  };

  const handleChangeStatus = async (body: ITaskBodyOptional) => {
    await dispatch(updateTaskThunk(body));
  };

  return (
    <li className="flex items-center justify-between">
      <h2 className="">{task.title}</h2>
      <select
        value={task.status}
        onChange={(e) =>
          handleChangeStatus({
            id: task.id,
            status: e.target.value as TaskStatus,
          })
        }
      >
        <option value={TaskStatus.COMPLETED}>Completed</option>
        <option value={TaskStatus.NOT_COMPLETED}>Not Completed</option>
        <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
      </select>
      <button type="button" onClick={() => handleDeleteTask(task.id)}>
        delete
      </button>
    </li>
  );
};
