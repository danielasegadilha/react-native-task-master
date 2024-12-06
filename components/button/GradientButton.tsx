import React from 'react';
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '../ThemedText';
import BackgroundGradientHorizontal from '../background/BackgroundGradientHorizontal';

const screenWidth = Dimensions.get('window').width;

interface DefaultButtonProps {
    text: string;
    href?: "/(tabs)" | "/newTask" | "./(tabs)/notes" | "./(tabs)/bullet";
    onPress?: () => void;
  }
  
export default function GradientButton({ text, href, onPress }: DefaultButtonProps) {
    const router = useRouter();

    const handlePress = async () => {
      if (onPress) {
        await onPress(); // Executa a ação personalizada, espera sua conclusão
      }
      if (href) {
        router.push({ pathname: href }); // Navega para o `href` fornecido
      }
    };

  return (
        <BackgroundGradientHorizontal style={styles.addButton}>
            <Pressable onPress={handlePress}>
              <ThemedText type="defaultSemiBold">{text}</ThemedText>
            </Pressable>
        </BackgroundGradientHorizontal>

  );
}

const styles = StyleSheet.create({
  addButton: {
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});