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
    <View style={styles.container}>
        <BackgroundGradientHorizontal style={styles.addButton}>
            <Pressable onPress={handlePress} style={{ pointerEvents: 'auto' }}>
              <ThemedText type="defaultSemiBold">{text}</ThemedText>
            </Pressable>
        </BackgroundGradientHorizontal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    padding: 16,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});