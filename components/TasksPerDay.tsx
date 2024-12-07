// src/components/TaskItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ViewStyle, TextStyle } from 'react-native';
import { ThemedText } from './ThemedText';


interface DayPeriodControlProps {
    text: string;
}
  
export default function TasksPerDay({text}: DayPeriodControlProps) {
    return (
        <View >
            <ThemedText type="small">{text} tasks</ThemedText>
        </View>
    );
}