import { Link, useRouter } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to TaskMaster!</Text>
        <TouchableOpacity style={styles.taskButton} onPress={() => {/* Lógica de salvar */}}>
          <Link href="/taskList">
            <Text style={styles.buttonTextWhite}>Enter</Text>
          </Link>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#161616',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#D1D3D5',
      marginBottom: 20,
    },
    taskButton: {
      backgroundColor: '#21272D', // Verde claro para o botão de salvar
      justifyContent: 'center',
      height: 40,
      borderRadius: 16,
      width: (screenWidth / 2) - 25,
      alignItems: 'center',
    },
    buttonTextWhite: {
      fontSize: 16,
      color: '#FFFFF1', // Texto escuro no botão cancelar
    },
  });
