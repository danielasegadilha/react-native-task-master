import * as SQLite from 'expo-sqlite'

export async function initializeDatabase() {
    try {
        const database = await SQLite.openDatabaseAsync("database.db", {
          useNewConnection: true,  // Força o uso de uma nova conexão
        });
    
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
        
        return database;
      } catch (error) {
        console.error("Erro ao criar a tabela:", error);
        throw error;
      }
}