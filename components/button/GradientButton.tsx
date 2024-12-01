import React from 'react';
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { ThemedText } from '../ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackgroundGradientHorizontal from '../background/BackgroundGradientHorizontal';

const screenWidth = Dimensions.get('window').width;

interface DefaultButtonProps {
    text: string;
    href: "/(tabs)" | "/newTask" | "./(tabs)/notes" | "./(tabs)/bullet";
  }
  
export default function GradientButton({ text, href }: DefaultButtonProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push({ pathname: href });  // Navega programaticamente
    };

  return (
    <View>
        <BackgroundGradientHorizontal style={styles.addButton}>
            <Pressable onPress={handlePress}>
                <View style={styles.pressable}>
                <ThemedText type="defaultMedium">{text}</ThemedText>  {/* Exibe o texto passado */}
                </View>
            </Pressable>
        </BackgroundGradientHorizontal>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 16,
    borderRadius: 16,
    width: ((screenWidth - 52) / 2),
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