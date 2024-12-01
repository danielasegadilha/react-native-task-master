// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ViewStyle, TextStyle } from 'react-native';
import { ThemedText } from './ThemedText';


interface DayPeriodControlProps {
    text: string;
}
  
export default function DayPeriodControl({ text}: DayPeriodControlProps) {
    return (
        <View style={styles.container}>
        <ThemedText type="smallSemiBold">{text}</ThemedText>
        <View style={styles.line} />
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 0.25,
        width: 8,
        backgroundColor: '#FFFFFF', 
        marginLeft: 4,
    },
});