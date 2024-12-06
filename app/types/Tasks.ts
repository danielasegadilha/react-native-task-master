export interface Tasks {
  id: number;
  title: string | undefined;
  description: string;
  deadline: string;
  priority: 'Low' | 'Medium' | 'High';
  shift: 'Morning' | 'Afternoon' | 'Evening';
  difficulty: 'Hard' | 'Medium' | 'Easy';
  duration: 'Time-Consuming' | 'Normal' | 'Quickly';
  note: string | undefined;
  status: string;
}

export let taskList: Tasks[] = [];