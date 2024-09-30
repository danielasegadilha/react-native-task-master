import { type SQLiteDatabase } from "expo-sqlite"

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS tasks (
            task_id INTEGER PRIMARY KEY AUTOINCREMENT
            task_title TEXT NOT NULL
            task_description TEXT
            task_deadline TEXT
            task_priority TEXT CHECK (task_priority IN ('low', 'medium', 'high') OR task_priority IS NULL)
            task_status INTEGER NOT NULL DEFAULT 0
        )
    `)


}