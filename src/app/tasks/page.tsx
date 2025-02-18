"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getTasksThunk } from "@/lib/tasks/thunks";
import { AddTaskForm } from "@/components/common/AddTaskForm/AddTaskForm";
import { TasksList } from "@/components/common/TasksList/TasksList";
import { Filters } from "@/components/common/Filters/Filters";
import { IFilter } from "@/types/filter";
import { TaskStatus } from "@/types/status";

export default function Page() {
  const [filters, setFilters] = useState<IFilter>({
    sort: "",
    status: TaskStatus.NONE,
    title: "",
  });
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);
  useEffect(() => {
    dispatch(getTasksThunk());
  }, [dispatch]);
  const filteredTasks = useMemo(() => {
    const sortedTasks = [...tasks];

    if (filters.sort === "newest") {
      sortedTasks.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    } else if (filters.sort === "oldest") {
      sortedTasks.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    }

    return sortedTasks.filter((task) => {
      const matchesTitle =
        !filters.title ||
        task.title.toLowerCase().includes(filters.title.toLowerCase());
      const matchesCompleted =
        !filters.status || task.status === filters.status;

      return matchesTitle && matchesCompleted;
    });
  }, [tasks, filters]);

  return (
    <>
      <Filters setFilters={setFilters} filters={filters} />
      <AddTaskForm />
      <TasksList tasks={filteredTasks} />
    </>
  );
}
