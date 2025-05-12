import { create } from 'zustand';
import { Task, TaskStatus } from '../types';

const LOCAL_STORAGE_KEY = 'task-store';

const saveTasksToStorage = (tasks: Task[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

const getInitialTasks = (): Task[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, status: TaskStatus) => void;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: getInitialTasks(),

  addTask: (task) =>
    set((state) => {
      const newTask = {
        ...task,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date(),
      };
      const updated = [...state.tasks, newTask];
      saveTasksToStorage(updated);
      return { tasks: updated };
    }),

  updateTask: (id, updatedTask) =>
    set((state) => {
      const updated = state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
      saveTasksToStorage(updated);
      return { tasks: updated };
    }),

  deleteTask: (id) =>
    set((state) => {
      const updated = state.tasks.filter((task) => task.id !== id);
      saveTasksToStorage(updated);
      return { tasks: updated };
    }),

  moveTask: (taskId, newStatus) =>
    set((state) => {
      const updated = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      saveTasksToStorage(updated);
      return { tasks: updated };
    }),
}));
