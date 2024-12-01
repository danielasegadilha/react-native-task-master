import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable, FlatList } from 'react-native';
import TaskItem from '@/components/TaskItem'; // Componente para exibir cada tarefa
import { Link } from 'expo-router';
import { useTasksDatabase } from '@/hooks/useTaskDatabase';
import { Task } from '../types/Task';

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
      <TaskItem/>
      <TaskItem/>
      <TouchableOpacity style={styles.addButton}>
        <Link href="/newTask" asChild>
          <Pressable>
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#161616', // Fundo preto
  },
  input: {
    height: 50,
    backgroundColor: '#303030',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFCFB',
    marginBottom: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#05C921', // Cor do botão
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 40,
    color: '#FFFCFB',
  },
});