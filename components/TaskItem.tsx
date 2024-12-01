// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '@/constants/Task'
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';


interface TaskItemProps {
    task: Task; // Aqui você usa a interface Task
}

// export default function TaskItem({ task }: TaskItemProps) {
export default function TaskItem() {
  return (
    <View>
      <LinearGradient
      colors={['#FFDF95', '#FECD71', '#FCA521']} // Cores do gradiente
      start={{ x: 0, y: 0 }} // Início do gradiente (0% no topo)
      end={{ x: 1, y: 0 }} // Fim do gradiente (100% na parte inferior)
      style={styles.taskContainer} // Estilo do container que vai ter o gradiente
    >
      <View style={styles.contentContainer}>
          {/* Quadrado ao lado do texto */}
          <View style={styles.square} />
          <ThemedText type="defaultBold">Teste</ThemedText>
        </View>
      </LinearGradient>
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