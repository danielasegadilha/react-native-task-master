import * as SQLite from 'expo-sqlite'

export async function initializeDatabase() {
    try {
        
    
        await database.execAsync(`
          CREATE TABLE IF NOT EXISTS tasks (
            task_id INTEGER PRIMARY KEY AUTOINCREMENT,
            task_title TEXT NOT NULL,
            task_description TEXT,
            task_deadline TEXT,
            task_priority TEXT CHECK (task_priority IN ('low', 'medium', 'high') OR task_priority IS NULL),
            task_status INTEGER NOT NULL DEFAULT 0
          );
        `);
        
        console.log("Tabela criada com sucesso.");
        
        
      } catch (error) {
        console.error("Erro ao criar a tabela:", error);
        throw error;
      }
}