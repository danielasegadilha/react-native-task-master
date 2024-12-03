import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { Task } from './types/Task';
import { ThemedView } from '@/components/ThemedView'; // Exemplo de componente de tema
import { useTasksDatabase } from '@/hooks/useTaskDatabase';
import DefaultInput from '@/components/DefaultInput';
import { ThemedText } from '@/components/ThemedText';
import DefaultDropdown from '@/components/dropdown/DefaultDropdown';
import SimpleButton from '@/components/button/SimpleButton';
import GradientButton from '@/components/button/GradientButton';
import Ionicons from '@expo/vector-icons/build/Ionicons';

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
      
      <View style={styles.contentHeader}>
        <Ionicons name="settings-outline" size={20} color="#D1D3D5" />
        <ThemedText type="title">New task</ThemedText>
      </View>
      <View style={styles.inputsContainer}>
        <DefaultInput label={'Title'} placeholder={'Enter title'}></DefaultInput>
        <View style={styles.rowContainer}>
          <DefaultDropdown label={'Priority'} placeholder={'Select priority'} options={["Low", "Medium", "High"]}></DefaultDropdown>
          {/* Nao precisa ser obrigatorio */}

          <DefaultDropdown label={'Shift'} placeholder={'Select shift'} options={["Morning", "Afternoon", "Evening"]}></DefaultDropdown>
        </View> 
        <View style={styles.rowContainer}>
          <DefaultDropdown label={'Difficulty'} placeholder={'Select difficulty'} options={["Hard", "Medium", "Easy"]}></DefaultDropdown>
          {/* Nao precisa ser obrigatorio */}

          <DefaultDropdown label={'Duration'} placeholder={'Select duration'} options={["Time-consuming", "Normal", "Quickly"]}></DefaultDropdown>
        </View> 
        <DefaultInput label={'Notes'} placeholder={'Enter notes'}></DefaultInput> 
        {/* Nao precisa ser obrigatorio */}

      </View>
      <View style={styles.buttonContainer}>
        <SimpleButton text={'Cancel'} href={'/(tabs)'}></SimpleButton>
        <GradientButton text={'Create'} href={'/(tabs)'}></GradientButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1, 
    backgroundColor: '#1A1F25',
  },
  contentHeader: {
    marginBottom: 32,
    flexDirection: 'row', // Distribui os itens horizontalmente
    paddingVertical: 8,
    justifyContent: 'space-between'
  },
  inputsContainer: {
    marginBottom: 24,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca os botões lado a lado
    justifyContent: 'space-between',
    
  },
});