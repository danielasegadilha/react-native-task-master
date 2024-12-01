// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';


export default function NewTask() {
  return (
    <View>
      <TouchableOpacity style={styles.addButton}>
        <Link href="/newTask" asChild>
          <Pressable>
          <Feather name="plus" size={24} color="#FFFFF1" />
          </Pressable>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        bottom: 10,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#21272D', // Cor do botão
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E8E8E8',
        shadowOffset: {
            width: 0,
            height: 0, // Sombra abaixo
        },
        shadowOpacity: 0.6,
        shadowRadius: 8, // Suavidade da sombra
        // Sombra para Android
        elevation: 10,
    },
});