import * as SQLite from 'expo-sqlite';
import { getTasks } from './tasksRepository';

export const db = SQLite.openDatabaseSync('tasks.db');

export const initDatabase = async (): Promise<void> => {
    try {
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          deadline TEXT NOT NULL,
          priority TEXT NOT NULL,
          status INTEGER NOT NULL
        );
      `);
      console.log('Tabela criada / inicializada com sucesso.');

      await getTasks();
    } catch (error) {
      console.error('Erro ao criar tabela:', error);
    }
};

export const closeDatabase = async (): Promise<void> => {
    try {
      await db.closeAsync();
      console.log('Conexão com o banco de dados fechada.');
    } catch (error) {
      console.error('Erro ao fechar conexão com o banco:', error);
    }
};
  
