import * as SQLite from 'expo-sqlite';
import { getTasks } from './tasksRepository';

export const db = SQLite.openDatabaseSync('tasks.db');

export const initDatabase = async (): Promise<void> => {
    try {

        /*// Remover a tabela antiga
        await db.execAsync(`
            DROP TABLE IF EXISTS tasks;
        `);
        console.log('Tabela antiga removida com sucesso.');*/

        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            deadline TEXT NOT NULL,
            priority TEXT NOT NULL CHECK (priority IN ('Low', 'Medium', 'High')),
            shift TEXT NOT NULL CHECK (shift IN ('Morning', 'Afternoon', 'Evening')),
            difficulty TEXT NOT NULL CHECK (difficulty IN ('Hard', 'Medium', 'Easy')),
            duration TEXT NOT NULL CHECK (duration IN ('Time-Consuming', 'Normal', 'Quickly')),
            note TEXT,
            status INTEGER NOT NULL CHECK (status IN (0, 1))
            );
        `);
      console.log('Tabela criada / inicializada com sucesso.');
      await getTasks();
      await logDatabaseContents('tasks');
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
  

export const logDatabaseContents = async (tableName: string): Promise<void> => {
    try {
      const rows = await db.getAllAsync(
        `SELECT * FROM ${tableName};`, // Consulta para selecionar tudo da tabela
        []
      );
  
      console.log(`Conteúdo da tabela ${tableName}:`, rows);
    } catch (error) {
      console.error(`Erro ao listar conteúdo da tabela ${tableName}:`, error);
    }
  };
