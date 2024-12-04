export interface Task {
    id: number; 
    title: string;
    description: string;
    deadline: string; 
    priority: string; 
    status: 0 | 1; 
  }

  export let taskList: Task[] = [];