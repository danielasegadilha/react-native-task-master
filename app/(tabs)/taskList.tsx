import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable, FlatList } from 'react-native';
import TaskItem from '@/components/TaskItem'; // Componente para exibir cada tarefa
import { Link } from 'expo-router';
import { useTasksDatabase } from '@/hooks/useTaskDatabase';
import { Task } from '../types/Task';
import NewTask from '@/components/NewTaskButton';

export default function TaskList() {

  // const taskDatabase = useTasksDatabase()
  // const [tasks, setTasks] = useState<Task[]>([])

  // async function listTask() {
  //   try {
  //     const response = await taskDatabase.getAll()
  //     setTasks(response)
  //   } catch (error) {
  //     console.log("Empty list")
  //   }

  // }

  // useEffect(() => {listTask()}, [tasks])

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={tasks} 
        keyExtractor={(item: { id: number; }) => String(item.id)}
        renderItem={({ item }: { item: Task }) => <TaskItem task={item} />}
        contentContainerStyle={{ paddingBottom: 80 }} // Para evitar sobreposição do botão
      /> */}
      <View style={styles.content}>
        <TaskItem />
        <TaskItem />
      </View>
      <NewTask />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20,
    backgroundColor: '#161616', // Fundo preto
  },
  content: {
    flexGrow: 1, // Garante que o conteúdo ocupe o espaço restante
  },
});