export interface Task {
    id: number; // ou string, dependendo do tipo que você usar no SQLite
    title: string;
    description: string;
    deadline: string; // você pode usar Date se preferir manipular como data
    priority: string; 
    status: 0 | 1; // Definindo status como um tipo literal
  }