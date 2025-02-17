export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  created: Date;
}

export interface ITaskState {
  tasks: ITask[];
  status: "idle" | "loading" | "failed";
}