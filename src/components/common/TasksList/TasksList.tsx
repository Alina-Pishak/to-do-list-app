import { FC } from "react";
import { TaskListItem } from "../TaskListItem/TaskListItem";
import { ITask } from "@/types/task";

interface ITaskList {
  tasks: ITask[];
}

export const TasksList: FC<ITaskList> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
