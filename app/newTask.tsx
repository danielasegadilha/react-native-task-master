import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { Task } from './types/Task';
import { ThemedView } from '@/components/ThemedView'; // Exemplo de componente de tema
import { useTasksDatabase } from '@/hooks/useTaskDatabase';
import DefaultInput from '@/components/DefaultInput';
import { ThemedText } from '@/components/ThemedText';

const screenWidth = Dimensions.get('window').width;

export default function NewTask() {
  
  // const taskDatabase = useTasksDatabase()


  // const [id, setId] = useState<Number>();
  // const [title, setTitle] = useState<string>('');
  // const [description, setDescription] = useState<string>('');
  // const [deadline, setDeadline] = useState<string>('');
  // const [priority, setPriority] = useState<string>(''); 
  // const [status, setStatus] = useState<0 | 1>(0);

  async function createTask() { 
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
      {/* <DefaultInput label={'Task title'} placeholder={'Enter task title'}></DefaultInput> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#161616', // Fundo preto
  },
  titleContainer: {
    backgroundColor: '#303030', // Fundo do título
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  dropdownContainer: {
    borderRadius: 50,
    overflow: 'hidden', // Para garantir que o `borderRadius` seja aplicado ao conteúdo do Picker
    backgroundColor: '#333333',
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#AAB8C2',
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca os botões lado a lado
    justifyContent: 'space-between',
    
  },
})};