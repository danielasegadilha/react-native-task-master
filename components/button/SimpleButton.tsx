import React from 'react';
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { ThemedText } from '../ThemedText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

interface DefaultButtonProps {
    text: string;
    href: "/(tabs)" | "/newTask" | "./(tabs)/notes" | "./(tabs)/bullet";
  }
  
export default function DefaultButton({ text, href }: DefaultButtonProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push({ pathname: href });  // Navega programaticamente
    };

  return (
    <View style={styles.addButton}>
        <Pressable onPress={handlePress}>
            <ThemedText type="defaultMediumWhite">{text}</ThemedText>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 16,
    borderRadius: 16,
    flex: 1,
    backgroundColor: '#272E34',  // Cor do botão
    alignItems: 'center',
    justifyContent: 'center',
  },
});