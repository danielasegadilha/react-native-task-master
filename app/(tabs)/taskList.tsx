import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import TaskItem from '@/components/TaskItem'; // Componente para exibir cada tarefa
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TaskMaster</Text> {/* Título da tela */}
      </View>
      {/* <FlatList
        // data={[]} // Aqui você pode conectar o SQLite
        // renderItem={({ item }) => <TaskItem task={item} />}
        // keyExtractor={(item) => item.id}
        // contentContainerStyle={{ paddingBottom: 80 }} // Para evitar sobreposição do botão
      /> */}
      <TouchableOpacity style={styles.addButton}>
        <Link href="/newTask">View user</Link>
        <Text style={styles.addButtonText}>+</Text> {/* Botão para adicionar nova tarefa */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616', // Fundo preto
  },
  titleContainer: {
    backgroundColor: '#303030', // Fundo do título
    paddingVertical: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFCFB',
    marginBottom: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#05C921', // Cor do botão
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 30,
    color: '#FFFCFB',
  },
});

export default TaskList;