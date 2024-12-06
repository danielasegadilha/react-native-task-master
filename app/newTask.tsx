import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import DefaultInput from '@/components/DefaultInput';
import { ThemedText } from '@/components/ThemedText';
import DefaultDropdown from '@/components/dropdown/DefaultDropdown';
import SimpleButton from '@/components/button/SimpleButton';
import GradientButton from '@/components/button/GradientButton';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { addTask } from '@/database/tasksRepository';
import { Tasks } from './types/Tasks';



export default function NewTask() {

  const [task, setTask] = useState<Omit<Tasks, 'id'>>({
    title: undefined,
    description: '',
    deadline: new Date().toISOString(),
    priority: 'Low',
    shift: 'Morning',
    difficulty: 'Easy',
    duration: 'Normal',
    note: undefined,
    status: 'Pending',
  });

  const handleInputChange = (field: keyof Omit<Tasks, 'id'>, value: any) => {
    setTask((prev) => ({ ...prev, [field]: value }));
  };

  const createTask = async () => {
    try {
      await addTask(task);
      console.log('Tarefa criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };
    
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <Ionicons name="settings-outline" size={20} color="#D1D3D5" />
          <ThemedText type="title">New Task</ThemedText>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.inputsContainer}>
          <DefaultInput
            label="Title"
            placeholder="Enter title"
            value={task.title}
            onChangeText={(value) => handleInputChange('title', value)}
          />
          <View style={styles.rowContainer}>
            <DefaultDropdown
              label="Priority"
              placeholder="Select priority"
              options={['Low', 'Medium', 'High']}
              value={task.priority}
              onValueChange={(value) => handleInputChange('priority', value)}
            />
            <DefaultDropdown
              label="Shift"
              placeholder="Select shift"
              options={['Morning', 'Afternoon', 'Evening']}
              value={task.shift}
              onValueChange={(value) => handleInputChange('shift', value)}
            />
          </View>
          <View style={styles.rowContainer}>
            <DefaultDropdown
              label="Difficulty"
              placeholder="Select difficulty"
              options={['Hard', 'Medium', 'Easy']}
              value={task.difficulty}
              onValueChange={(value) => handleInputChange('difficulty', value)}
            />
            <DefaultDropdown
              label="Duration"
              placeholder="Select duration"
              options={['Time-consuming', 'Normal', 'Quickly']}
              value={task.duration}
              onValueChange={(value) => handleInputChange('duration', value)}
            />
          </View>
          <DefaultInput
            label="Notes"
            placeholder="Enter notes"
            value={task.note}
            onChangeText={(value) => handleInputChange('note', value)}
          />
        </View>
        <View style={[styles.buttonContainer, styles.rowContainer]}>
          <SimpleButton text="Cancel" href="/(tabs)" />
          <GradientButton
            text="Create"
            href={'/(tabs)'}
            onPress={createTask}  
          />
        </View>
      </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 12, 
    flex: 1, 
    backgroundColor: '#1A1F25',
  },
  scrollContainer: {
    flexGrow: 1, 
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
    paddingBottom: 8,
  }
});