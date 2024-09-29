export interface Task {
    id: number; // ou string, dependendo do tipo que você usar no SQLite
    title: string;
    description: string;
    deadline: string; // você pode usar Date se preferir manipular como data
    priority: 'Low' | 'Medium' | 'High'; // Definindo prioridades como um tipo literal
    status: 'In Progress' | 'Completed' | 'Pending'; // Definindo status como um tipo literal
  }