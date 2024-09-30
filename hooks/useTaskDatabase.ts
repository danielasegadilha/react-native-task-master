import { useState, useEffect } from 'react';
import { Task } from '@/constants/Task';
import { useSQLiteContext } from 'expo-sqlite';

export function useTasksDatabase() {

  const database = useSQLiteContext()

  async function create(task: Omit<Task, "id" | "status">) {

    const statement = await database.prepareAsync(
      "INSERT INTO tasks (task_title, task_description, task_deadline, task_priotiry) VALUES ($title, $description, $deadline, $priority)"
    )

    try {
      const result = await statement.executeAsync({
        $title: task.title,
        $description: task.description,
        $deadline: task.deadline,
        $priority: task.priority,
      })
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  return { create }
}