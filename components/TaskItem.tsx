// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '@/constants/Task'
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from './BackgroundGradient';


interface TaskItemProps {
    task: Task; // Aqui você usa a interface Task
}

// export default function TaskItem({ task }: TaskItemProps) {
export default function TaskItem() {
  return (
    <View>
      <BackgroundGradient style={styles.taskContainer}>
        <View style={styles.contentContainer}>
            {/* Quadrado ao lado do texto */}
            <View style={styles.square} />
            <ThemedText type="defaultMedium">Teste</ThemedText>
          </View>
        </BackgroundGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row', // Coloca os componentes lado a lado
    alignItems: 'center',
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: '#2B323A',
    borderRadius: 4,
    marginRight: 16,
  }
});