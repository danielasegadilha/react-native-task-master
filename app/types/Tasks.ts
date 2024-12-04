export interface Tasks {
  id: number;
  title: string;
  description: string;
  deadline: string;
  priority: 'Low' | 'Medium' | 'High';
  shift: 'Morning' | 'Afternoon' | 'Evening';
  difficulty: 'Hard' | 'Medium' | 'Easy';
  duration: 'Time-Consuming' | 'Normal' | 'Quickly';
  note: string;
  status: 0 | 1;
}

export let taskList: Tasks[] = [];