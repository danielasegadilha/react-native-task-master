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
    <View style={styles.addButton}>
        <Pressable onPress={handlePress} style={{ pointerEvents: 'auto' }}>
            <View style={styles.pressable}>
              <ThemedText type="defaultWhite">{text}</ThemedText>
              <MaterialCommunityIcons name={iconName} size={24} color="#B2B2B1" style={styles.icon}/>
            </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#272E34',  // Cor do botão
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  pressable: {
    flexDirection: 'row',  // Para alinhar o ícone e o texto
    alignItems: 'center',  // Alinha o texto e o ícone
    width: '100%',
  },
  icon: {
    marginLeft: 8,  // Espaçamento entre o ícone e o texto
  },
});