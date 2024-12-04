import DayPeriodControl from "@/components/DayPeriodControl";
import TaskItem from "@/components/TaskItem";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import NewTask from "../newTask";
import NewTaskButton from "@/components/button/NewTaskButton";
import DefaultButton from "@/components/button/DefaultButton";
import WeekDayButton from "@/components/button/WeekDayButton";
import MiniDropdown from "@/components/dropdown/MiniDropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalTaskItem from "@/components/ModalTaskItem";

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedTask, setSelectedTask] = useState(null); // Para armazenar a tarefa selecionada

  // Função para alternar a visibilidade do modal
  const toggleModal = (task = null) => {
    // setSelectedTask(task); // Defina a tarefa selecionada no modal
    setIsModalVisible(!isModalVisible); // Alterna a visibilidade do modal
  };
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
      <View style={styles.contentHeader}>
        <Ionicons name="settings-outline" size={20} color="#D1D3D5"/>
        <MiniDropdown placeholder={"Per day"} options={["Per week", "Per month"]}></MiniDropdown>
      </View>
      <ModalTaskItem taskTitle={""} colors={[]} isModalVisible={isModalVisible} toggleModal={toggleModal}></ModalTaskItem>
      <WeekDayButton></WeekDayButton>
      <View style={styles.contentButton}>
        <DefaultButton text={'Reminder'} iconName={'pin-outline'} href={'/(tabs)'}></DefaultButton>
        <DefaultButton text={'Progress'} iconName={'trending-up'} href={'/(tabs)'}></DefaultButton>
      </View>
      <View style={styles.contentTasks}>
        <View style={styles.contentHeader}>
          <ThemedText type="small">6 Tasks</ThemedText>
          <DayPeriodControl text={'Morning'}/>
        </View>
        <TaskItem toggleModal={toggleModal} colors={['#FFDF95', '#FECD71', '#FCA521']}/>
        <TaskItem toggleModal={toggleModal} colors={['#FFDF95', '#FECD71', '#FCA521']}/>
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Afternoon'}/>
        </View>
        <TaskItem toggleModal={toggleModal} colors={['#FFDF95', '#FECD71', '#FCA521']}/>
        <TaskItem toggleModal={toggleModal} colors={['#FFDF95', '#FECD71', '#FCA521']}/>
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Evening'}/>
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