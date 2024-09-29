import { useRouter } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function HomeScreen() {
    const router = useRouter();
  
    const navigateToTaskList = () => {
      router.push('./taskList'); // Navega para a tela de lista de tarefas
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to TaskMaster!</Text>
        <Button title="Go to task list" onPress={navigateToTaskList} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });
