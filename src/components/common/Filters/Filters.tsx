import { IFilter } from "@/types/filter";
import { TaskStatus } from "@/types/status";
import React, { FC, ChangeEvent } from "react";

interface IFiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilter>>;
  filters: IFilter;
}

export const Filters: FC<IFiltersProps> = ({ setFilters, filters }) => {
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, sort: e.target.value }));
  };
  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, status: e.target.value as TaskStatus }));
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, title: e.target.value }));
  };
  console.log(filters);

  return (
    <div className="">
      <select value={filters.sort} onChange={handleChangeSort}>
        <option value="">Sort</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <select value={filters.status} onChange={handleChangeStatus}>
        <option value={TaskStatus.NONE}>All tasks</option>
        <option value={TaskStatus.COMPLETED}>Completed</option>
        <option value={TaskStatus.NOT_COMPLETED}>Not Completed</option>
        <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
      </select>

      <input
        type="text"
        value={filters.title}
        onChange={handleChangeTitle}
        className="text-pink-700"
      />
    </div>
  );
};
