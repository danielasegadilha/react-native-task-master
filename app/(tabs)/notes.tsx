import DayPeriodControl from "@/components/DayPeriodControl";
import DefaultButton from "@/components/button/DefaultButton";
import TaskItem from "@/components/TaskItem";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import NewTask from "../newTask";

const screenWidth = Dimensions.get('window').width;

export default function NotesScreen() {
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


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20,
    backgroundColor: '#1A1F25', // Fundo preto
  }
});