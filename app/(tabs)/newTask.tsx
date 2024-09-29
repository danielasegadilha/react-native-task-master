import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { ThemedView } from '@/components/ThemedView'; // Exemplo de componente de tema

const NewTask: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>

      {/* Task title */}
      <Text style={styles.label}>Task Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título da tarefa"
        placeholderTextColor="#AAB8C2"
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a descrição da tarefa"
        placeholderTextColor="#AAB8C2"
      />

      {/* Deadline */}
      <Text style={styles.label}>Deadline</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o prazo (ex: 2024-09-30)"
        placeholderTextColor="#AAB8C2"
      />

      {/* Priority (Dropdown) */}
      <Text style={styles.label}>Priority</Text>
      <Picker
        style={styles.dropdown}
      >
        <Picker.Item label="Select Priority" value="" />
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="High" value="High" />
      </Picker>

      {/* Botões de salvar e cancelar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => {/* Lógica de salvar */}}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000', // Fundo preto
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#333333',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca os botões lado a lado
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Verde claro para o botão de salvar
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF5722', // Cor laranja para o botão de cancelar
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewTask;