// src/components/TaskItem.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Task } from '@/constants/Task'
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from './background/BackgroundGradientHorizontal';
import BackgroundGradientHorizontal from './background/BackgroundGradientHorizontal';
import Entypo from '@expo/vector-icons/build/Entypo';
// import IconCheck from '@/assets/icons/IconCheck.svg';


interface TaskItemProps {
    // task: Task; // Aqui você usa a interface Task
    colors: string[];
    text: string;
    toggleModal: () => void;
    
}

// export default function TaskItem({ task }: TaskItemProps) {
export default function TaskItem({colors: initialColors, text, toggleModal}: TaskItemProps) {
  const [colors, setColors] = useState(initialColors);
  const [isDefaultColors, setIsDefaultColors] = useState(true); // Controla o estado do ciclo
  const [isModalVisible, setModalVisible] = useState(false); // Adiciona o estado do modal

  const handleSquarePress = () => {
    if (isDefaultColors) {
      setColors(['#BDFF9B', '#62CC7B']); // Define as cores verdes
    } else {
      setColors(initialColors); // Retorna às cores iniciais
    }
    setIsDefaultColors(!isDefaultColors); // Alterna o estado
  };;

  const dynamicSquareStyle = {
    backgroundColor: isDefaultColors ? '#2B323A' : '#FFFFF1',
    borderWidth: isDefaultColors ? 0 : 1.2,
    borderColor: isDefaultColors ? 'transparent' : '#D1D1D6',
  };

  const dynamicCheckStyle = {
    display: isDefaultColors ? 'none' as 'none' : 'flex' as 'flex',
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleModal}>
        <BackgroundGradientHorizontal colors={colors} style={styles.taskContainer}>
          <View style={styles.contentContainer}>
            <Pressable onPress={handleSquarePress} style={[styles.squareBase, dynamicSquareStyle]}/>
            <Entypo onPress={handleSquarePress} name="check" size={34} color="#0CA402" style={[styles.icon, dynamicCheckStyle]}/>
            <ThemedText type="defaultMedium">{text}</ThemedText>
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
    padding: 24,
    marginBottom: 4,
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row', // Coloca os componentes lado a lado
    alignItems: 'center',
    position: "relative"
  },
  icon: {
    left: -4, // Move para a esquerda (valores negativos)
    top: -18,
    zIndex: 2,
    position: "absolute"
  },
  squareBase: {
    zIndex: 1,
    height: 24,
    width: 24,
    borderRadius: 4,
    marginRight: 16,
  },
});