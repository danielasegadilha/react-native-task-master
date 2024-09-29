import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { ThemedView } from '@/components/ThemedView'; // Exemplo de componente de tema

const screenWidth = Dimensions.get('window').width;

const NewTask: React.FC = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add task</Text>
      </View>

      <View style={styles.containerTask}>

        {/* Task title */}
        <Text style={styles.label}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title"
          placeholderTextColor="#AAB8C2"
        />

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task description"
          placeholderTextColor="#AAB8C2"
        />

        {/* Deadline */}
        <Text style={styles.label}>Deadline</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#AAB8C2"
        />

        {/* Priority (Dropdown) */}
        <Text style={styles.label}>Priority</Text>
        <View style={styles.dropdownContainer}>
          <Picker style={styles.dropdown}>
            <Picker.Item label="Select Priority" value="" />
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>

        {/* Botões de salvar e cancelar */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Link href="./index" asChild>
              <Pressable>
                  <Text>Cancel</Text>
                </Pressable>
              </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={() => {/* Lógica de salvar */}}>
            <Text style={styles.buttonTextWhite}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#161616', // Fundo preto
  },
  containerTask: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    backgroundColor: '#303030', // Fundo do título
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFCFB',
  },
  label: {
    fontSize: 16,
    color: '#FFFCFB',
    marginBottom: 5,
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
  dropdownContainer: {
    borderRadius: 50,
    overflow: 'hidden', // Para garantir que o `borderRadius` seja aplicado ao conteúdo do Picker
    backgroundColor: '#333333',
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#AAB8C2',
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca os botões lado a lado
    justifyContent: 'space-between',
    
  },
  submitButton: {
    backgroundColor: '#05C921', // Verde claro para o botão de salvar
    justifyContent: 'center',
    height: 40,
    width: (screenWidth / 2) - 25, // Metade da largura da tela, menos o gap
    borderRadius: 50,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FFFCFB', // Cor branca para o botão de cancelar
    justifyContent: 'center',
    height: 40,
    width: (screenWidth / 2) - 25, // Metade da largura da tela, menos o gap
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#161616', // Texto escuro no botão cancelar
  },
  buttonTextWhite: {
    fontSize: 14,
    color: '#FFFCFB', // Texto escuro no botão cancelar
  },
});

export default NewTask;