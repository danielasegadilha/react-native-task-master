export interface Task {
    id: number; 
    title: string;
    description: string;
    deadline: string; 
    priority: 'Low' | 'Medium' | 'High' | null; 
    status: 0 | 1; 
  }