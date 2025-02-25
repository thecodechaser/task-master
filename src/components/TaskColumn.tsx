import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Task } from '../types';
import { TaskCard } from './TaskCard';

interface TaskColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

export const TaskColumn = ({ id, title, tasks }: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-50 p-4 rounded-lg border border-gray-200"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <span className="bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-sm font-medium">
          {tasks.length}
        </span>
      </div>
      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};