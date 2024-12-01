import DayPeriodControl from "@/components/DayPeriodControl";
import TaskItem from "@/components/TaskItem";
import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import NewTask from "../newTask";
import NewTaskButton from "@/components/button/NewTaskButton";
import DefaultButton from "@/components/button/DefaultButton";

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
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
      <View style={styles.contentButton}>
        <DefaultButton text={'Reminder'} iconName={'pin-outline'} href={'/(tabs)'}></DefaultButton>
        <DefaultButton text={'Progress'} iconName={'trending-up'} href={'/(tabs)'}></DefaultButton>
      </View>
      <View style={styles.contentTasks}>
        <View style={styles.contentHeader}>
          <ThemedText type="small">6 Tasks</ThemedText>
          <DayPeriodControl text={'Morning'} />
        </View>
        <TaskItem colors={['#FFDF95', '#FECD71', '#FCA521']} />
        <TaskItem colors={['#FFDF95', '#FECD71', '#FCA521']} />
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Afternoon'} />
        </View>
        <TaskItem colors={['#FFDF95', '#FECD71', '#FCA521']} />
        <TaskItem colors={['#FFDF95', '#FECD71', '#FCA521']} />
        <View style={styles.contentHeaderEnd}>
          <DayPeriodControl text={'Evening'} />
        </View>
        <TaskItem colors={['#FFDF95', '#FECD71', '#FCA521']} />
        <TaskItem colors={['#FFDF95', '#FECD71', '#FCA521']} />
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