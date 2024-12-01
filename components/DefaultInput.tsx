// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Dimensions, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

interface DefaultButtonProps {
    text: string;  // Texto dinâmico para o botão
    placeholder: string;  // Nome do ícone dinâmico (baseado no Feather ou outro pacote)
}

export default function DefaultInput({ text, placeholder }: DefaultButtonProps) {
    return (
        <View style={styles.containerTask}>

            {/* Task title */}
            <Text style={styles.label}>{text}</Text>
            <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#AAB8C2" 
            // onChangeText={setTitle}
            // value={title}
            />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
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
  });