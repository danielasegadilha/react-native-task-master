import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { Task } from './types/Task';
import { ThemedView } from '@/components/ThemedView'; // Exemplo de componente de tema
import { useTasksDatabase } from '@/hooks/useTaskDatabase';
import DefaultInput from '@/components/DefaultInput';
import { ThemedText } from '@/components/ThemedText';
import DefaultDropdown from '@/components/DefaultDropdown';

const screenWidth = Dimensions.get('window').width;

export default function NewTask() {
  
  // const taskDatabase = useTasksDatabase()


  // const [id, setId] = useState<Number>();
  // const [title, setTitle] = useState<string>('');
  // const [description, setDescription] = useState<string>('');
  // const [deadline, setDeadline] = useState<string>('');
  // const [priority, setPriority] = useState<string>(''); 
  // const [status, setStatus] = useState<0 | 1>(0);

  // async function createTask() { 
  //   const newTask: Omit<Task, 'id' | 'status'> = {
  //     title,
  //     description,
  //     deadline,
  //     priority,
  //   }

  //   try {
  //     const response = await taskDatabase.create(newTask)
  //   } catch (error) {
  //     throw error
  //   }

  //  }
    
  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <ThemedText type="title">New task</ThemedText>
      </View>
      <DefaultInput label={'Task title'} placeholder={'Enter task title'}></DefaultInput>
      <DefaultInput label={'Description'} placeholder={'Enter task description'}></DefaultInput>
      <DefaultDropdown label={'Priority'} placeholder={'Select priority'} options={["Low", "Medium", "High"]}></DefaultDropdown>
      <DefaultInput label={'Deadline'} placeholder={'YYYY-MM-DD'}></DefaultInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1, 
  },
  titleContainer: {
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca os botões lado a lado
    justifyContent: 'space-between',
    
  },
});