// src/components/TaskItem.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from './ThemedText';
import BackgroundGradientHorizontal from './background/BackgroundGradientHorizontal';
import Entypo from '@expo/vector-icons/build/Entypo';
import { Link, router } from 'expo-router';
import { Tasks } from '@/app/types/Tasks';
import { updateTaskStatusToFinished, updateTaskStatusToPending } from '@/database/tasksRepository';
// import IconCheck from '@/assets/icons/IconCheck.svg';


interface TaskItemProps {
    task: Tasks; // Aqui você usa a interface Task
    colors: string[];
}

// export default function TaskItem({ task }: TaskItemProps) {
export default function TaskItem({colors: initialColors, task}: TaskItemProps) {
  const [colors, setColors] = useState(
    task.status === 'Finished' ? ['#BDFF9B', '#62CC7B'] : initialColors
  );
  const [isDefaultColors, setIsDefaultColors] = useState(task.status !== 'Finished'); // Inicializa com base no status
  const [isModalVisible, setModalVisible] = useState(false); // Adiciona o estado do modal

  const handleSquarePress = async () => {
    if (isDefaultColors) {
      setColors(['#BDFF9B', '#62CC7B']); // Estilo verde para 'Finished'
      await updateTaskStatusToFinished(task.id); // Atualiza o status no banco
    } else {
      setColors(initialColors); // Estilo original para 'Pending'
      await updateTaskStatusToPending(task.id); // Atualiza o status no banco
    }
    setIsDefaultColors(!isDefaultColors); // Alterna o estado
  };

  const dynamicSquareStyle = {
    backgroundColor: isDefaultColors ? '#2B323A' : '#FFFFF1',
    borderWidth: isDefaultColors ? 0 : 1.2,
    borderColor: isDefaultColors ? 'transparent' : '#D1D1D6',
  };

  const dynamicCheckStyle = {
    display: isDefaultColors ? 'none' as 'none' : 'flex' as 'flex',
  };

  const taskParam = encodeURIComponent(JSON.stringify(task));

  const handleTaskClick = () => {
    router.push(`../modal?task=${taskParam}`);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleTaskClick} style={styles.link}>
        <BackgroundGradientHorizontal colors={colors} style={styles.taskContainer}>
          <View style={styles.contentContainer}>
            <Pressable style={styles.squareContainer} onPress={handleSquarePress}>
              <Pressable onPress={handleSquarePress} style={[styles.squareBase, dynamicSquareStyle]} />
              <Entypo onPress={handleSquarePress}  name="check" size={34} color="#0CA402" style={[styles.icon, dynamicCheckStyle]} />
            </Pressable>
            <ThemedText type="defaultMedium">{task.title}</ThemedText>
          </View>
        </BackgroundGradientHorizontal>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
  },
  taskContainer: {
    paddingRight: 16,
    borderRadius: 8,
    width: '100%'
  },
  link: {
    paddingTop: 4,
  },
  contentContainer: {
    flexDirection: 'row', // Coloca os componentes lado a lado
    alignItems: 'center',
    position: "relative",
  },
  icon: {
    left: 12, // Move para a esquerda (valores negativos)
    top: 6,
    zIndex: 2,
    position: "absolute"
  },
  squareContainer: {
    width: 60,
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row', // Coloca os componentes lado a lado
    alignItems: 'center',
  },
  squareBase: {
    zIndex: 1,
    height: 24,
    width: 24,
    borderRadius: 4,
    marginRight: 16,
  },
});