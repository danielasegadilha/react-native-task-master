import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import TaskItem from '@/components/TaskItem'; // Componente para exibir cada tarefa
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Task Master</Text>
      </View>
      {/* <FlatList
        // data={[]} // Aqui você pode conectar o SQLite
        // renderItem={({ item }) => <TaskItem task={item} />}
        // keyExtractor={(item) => item.id}
        // contentContainerStyle={{ paddingBottom: 80 }} // Para evitar sobreposição do botão
      /> */}
      <TouchableOpacity style={styles.addButton}>
        <Link href="/newTask" asChild>
          <Pressable>
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#161616', // Fundo preto
  },
  titleContainer: {
    backgroundColor: '#303030', // Fundo do título
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFCFB',
  },
  input: {
    height: 50,
    backgroundColor: '#303030',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFCFB',
    marginBottom: 20,
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
    fontSize: 40,
    color: '#FFFCFB',
  },
});

export default TaskList;