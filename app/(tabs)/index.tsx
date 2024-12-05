import DayPeriodControl from "@/components/DayPeriodControl";
import TaskItem from "@/components/TaskItem";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import NewTask from "../newTask";
import NewTaskButton from "@/components/button/NewTaskButton";
import DefaultButton from "@/components/button/DefaultButton";
import WeekDayButton from "@/components/button/WeekDayButton";
import MiniDropdown from "@/components/dropdown/MiniDropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalTaskItem from "@/components/ModalTaskItem";
import { Tasks, taskList } from "../types/Tasks";

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedTask, setSelectedTask] = useState(null); // Para armazenar a tarefa selecionada

  // Função para alternar a visibilidade do modal
  const toggleModal = (task = null) => {
    // setSelectedTask(task); // Defina a tarefa selecionada no modal
    setIsModalVisible(!isModalVisible); // Alterna a visibilidade do modal
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Ionicons name="settings-outline" size={20} color="#D1D3D5"/>
        <MiniDropdown placeholder={"Per day"} options={["Per week", "Per month"]}></MiniDropdown>
      </View>
      {/* <ModalTaskItem taskTitle={""} colors={[]} isModalVisible={isModalVisible} toggleModal={toggleModal}></ModalTaskItem> */}
      <WeekDayButton></WeekDayButton>
      <View style={styles.contentButton}>
        <DefaultButton text={'Reminder'} iconName={'pin-outline'} href={'/(tabs)'}></DefaultButton>
        <DefaultButton text={'Progress'} iconName={'trending-up'} href={'/(tabs)'}></DefaultButton>
      </View>
      <View style={styles.containerTasks}>
        <View>
          <View style={styles.contentHeader}>
            <ThemedText type="small">6 Tasks</ThemedText>
            <DayPeriodControl text={'Morning'}/>
          </View>
          <FlatList
          data={taskList.filter(task => task.shift === 'Morning')} // Filtra tarefas com shift 'Morning'
            keyExtractor={(item) => String(item.id)} // Usa o ID como chave
            renderItem={({ item }) => (
            <TaskItem
            text={item.title}
            colors={['#FFDF95', '#FECD71', '#FCA521']} // Ajuste de cores conforme necessário
            task={item}/>
        )}
      
      />
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Afternoon'}/>
        </View>
        <FlatList
          data={taskList.filter(task => task.shift === 'Afternoon')} // Filtra tarefas com shift 'Morning'
            keyExtractor={(item) => String(item.id)} // Usa o ID como chave
            renderItem={({ item }) => (
          <TaskItem
            text={item.title}
            colors={['#FFDF95', '#FECD71', '#FCA521']} // Ajuste de cores conforme necessário
            task={item}/>
        )}
      />
        
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Evening'}/>
        </View>

        <FlatList
          data={taskList.filter(task => task.shift === 'Evening')} // Filtra tarefas com shift 'Morning'
            keyExtractor={(item) => String(item.id)} // Usa o ID como chave
            renderItem={({ item }) => (
          <TaskItem
            text={item.title}
            colors={['#FFDF95', '#FECD71', '#FCA521']} // Ajuste de cores conforme necessário
            task={item}/>
        )}
      />
        </View>
      </View>
      <NewTaskButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20,
    backgroundColor: '#1A1F25', // Fundo preto
  },
  contentButton: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    gap: 16,
  },
  containerTasks: {
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