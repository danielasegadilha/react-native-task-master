import { Tasks, taskList } from "@/app/types/Tasks";
import { db } from "./db";

export const getTasks = async (): Promise<Tasks[]> => {
    try {
      const tasks: Tasks[] = await db.getAllAsync(
        'SELECT * FROM tasks;', 
        [] // Parâmetros, se necessário
      );

      taskList.length = 0;
      taskList.push(...tasks);

      return taskList;
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      return [];
    }
};

export const addTask = async (task: Omit<Tasks, 'id'>): Promise<void> => {
  try {
    await db.runAsync(
      `INSERT INTO tasks 
      (title, description, deadline, priority, shift, difficulty, duration, note, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        task.title ?? null,
        task.description,
        task.deadline,
        task.priority,
        task.shift,
        task.difficulty,
        task.duration,
        task.note ?? null,
        task.status
      ]
    );
    console.log('Tarefa adicionada com sucesso!');
    await getTasks();
  } catch (error) {
    console.error('Erro ao adicionar tarefa:', error);
  }
};
  
export const updateTask = async (task: Tasks): Promise<void> => {
  try {
    await db.runAsync(
      `UPDATE tasks 
      SET title = ?, 
          description = ?, 
          deadline = ?, 
          priority = ?, 
          shift = ?, 
          difficulty = ?, 
          duration = ?, 
          note = ?, 
          status = ? 
      WHERE id = ?;`,
      [
        task.title  ?? null,
        task.description,
        task.deadline,
        task.priority,
        task.shift,
        task.difficulty,
        task.duration,
        task.note  ?? null,
        task.status,
        task.id
      ]
    );
    console.log('Tarefa atualizada com sucesso!');
    await getTasks();
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
  }
};

export const deleteTask = async (id: number): Promise<void> => {
    try {
      await db.runAsync('DELETE FROM tasks WHERE id = ?;', [id]);
      console.log('Tarefa deletada com sucesso!');

      await getTasks();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
};

// Função para atualizar o status da tarefa para "finished"
export const updateTaskStatusToFinished = async (id: number): Promise<void> => {
  try {
    await db.runAsync(
      `UPDATE tasks 
      SET status = ? 
      WHERE id = ?;`,
      ['Finished', id]
    );
    console.log('Status da tarefa atualizado para "Finished"');
    await getTasks();
  } catch (error) {
    console.error('Erro ao atualizar status da tarefa para "Finished":', error);
  }
};

// Função para atualizar o status da tarefa para "pending"
export const updateTaskStatusToPending = async (id: number): Promise<void> => {
  try {
    await db.runAsync(
      `UPDATE tasks 
      SET status = ? 
      WHERE id = ?;`,
      ['Pending', id]
    );
    console.log('Status da tarefa atualizado para "Pending"');
    await getTasks();
  } catch (error) {
    console.error('Erro ao atualizar status da tarefa para "Pending":', error);
  }
};