import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable, FlatList } from 'react-native';
import TaskItem from '@/components/TaskItem'; // Componente para exibir cada tarefa
import { Link } from 'expo-router';
import { useTasksDatabase } from '@/hooks/useTaskDatabase';
import { Task } from '../types/Task';
import NewTask from '@/components/NewTaskButton';
import DayPeriodControl from '@/components/DayPeriodControl';
import { ThemedText } from '@/components/ThemedText';
import DefaultButton from '@/components/DefaultButton';

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
      <View style={styles.contentButton}>
        <DefaultButton text={'Reminder'} iconName={'pin-outline'} href={'/taskList'}></DefaultButton>
        <DefaultButton text={'Progress'} iconName={'trending-up'} href={'/taskList'}></DefaultButton>
      </View>
      <View style={styles.contentTasks}>
        <View style={styles.contentHeader}>
          <ThemedText type="small">6 Tasks</ThemedText>
          <DayPeriodControl text={'Morning'} />
        </View>
        <TaskItem />
        <TaskItem />
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Afternoon'} />
        </View>
        <TaskItem />
        <TaskItem />
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Evening'} />
        </View>
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
  contentButton: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  contentTasks: {
    flexGrow: 1, // Garante que o conteúdo ocupe o espaço restante
  },
  contentHeader: {
    flexDirection: 'row', // Distribui os itens horizontalmente
    paddingVertical: 8,
    justifyContent: 'space-between'
  },
  contentHeaderEnd: {
    flexDirection: 'row', // Distribui os itens horizontalmente
    paddingVertical: 8,
    justifyContent: 'flex-end'
  }
});