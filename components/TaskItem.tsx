// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '@/constants/Task'


interface TaskItemProps {
    task: Task; // Aqui você usa a interface Task
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Deadline: {task.deadline}</Text>
      <Text>Priority: {task.priority}</Text>
      <Text>Status: {task.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#2E4B5F', // Cor de fundo da tarefa
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // Cor do texto
  },
});