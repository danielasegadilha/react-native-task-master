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