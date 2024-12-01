// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

interface DefaultButtonProps {
    text: string;  // Texto dinâmico para o botão
    iconName: | "pin-outline" | "trending-up";  // Nome do ícone dinâmico (baseado no Feather ou outro pacote)
}

export default function DefaultButton({ text, iconName }: DefaultButtonProps) {
    return (
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Link href="/newTask" asChild>
            <Pressable style={styles.pressable}>
              <ThemedText type="defaultWhite">{text}</ThemedText>  {/* Exibe o texto passado */}
              <MaterialCommunityIcons name={iconName} size={24} color="#B2B2B1" style={styles.icon} />
            </Pressable>
          </Link>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    addButton: {
      padding: 16,
      borderRadius: 16,
      width: ((screenWidth - 52)/ 2),
      backgroundColor: '#21272D', // Cor do botão
      alignItems: 'center',
      justifyContent: 'center',
    },
    pressable: {
      flexDirection: 'row',  // Para alinhar o ícone e o texto
      alignItems: 'center',  // Alinha o texto e o ícone
    },
    icon: {
      marginLeft: 8,  // Espaçamento entre o ícone e o texto
    },
  });