import React from 'react';
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { ThemedText } from '../ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

interface DefaultButtonProps {
    text: string;
    href: "/(tabs)" | "/newTask" | "./(tabs)/notes" | "./(tabs)/bullet";
    iconName: "pin-outline" | "trending-up";
  }
  
export default function DefaultButton({ text, iconName, href }: DefaultButtonProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push({ pathname: href });  // Navega programaticamente
    };

  return (
    <View>
        <Pressable style={styles.addButton} onPress={handlePress}>
            <View style={styles.pressable}>
            <ThemedText type="defaultWhite">{text}</ThemedText>  {/* Exibe o texto passado */}
            <MaterialCommunityIcons name={iconName} size={24} color="#B2B2B1" style={styles.icon} />
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 16,
    borderRadius: 16,
    width: ((screenWidth - 52) / 2),
    backgroundColor: '#21272D',  // Cor do botão
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