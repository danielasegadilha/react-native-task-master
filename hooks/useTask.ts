import { useState, useEffect } from 'react';
import { Task } from '@/constants/Task';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Lógica para buscar tarefas do banco de dados
    // //   const response = await; /* código para buscar do SQLite */
    //   setTasks(response);
    };

    fetchTasks();
  }, []);

  return { tasks };
};

export { useTasks };