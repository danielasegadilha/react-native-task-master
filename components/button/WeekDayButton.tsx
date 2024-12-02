// src/components/TaskItem.tsx
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import BackgroundGradientVertical from '../background/BackgroundGradientVertical';
import { ThemedText } from '../ThemedText';

export default function WeekDayButton() {
  const router = useRouter();

  // Obtendo a data atual
  const currentDate = new Date();

  // Formatar o dia (adicionando 0 à esquerda se necessário)
  const dayOfMonth = currentDate.getDate().toString().padStart(2, '0'); // Adiciona o zero à esquerda

  // Formatar o mês (primeira letra maiúscula, sem ponto)
  const month = currentDate.toLocaleString('default', { month: 'short' }).replace('.', '');
  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1); // Primeira letra maiúscula

  const title = "Today"; // Pode ajustar conforme necessário

  const handlePress = () => {
    router.push({ pathname: '../newTask' }); // Navegação programática para a nova tarefa
  };

  return (
    <View style={styles.container}>
      <ThemedText type="smallSemiBold" style={styles.title}>{title}</ThemedText>
      <BackgroundGradientVertical style={styles.circleContainer}>
        <Pressable style={styles.circle} onPress={handlePress}>
          <ThemedText type="smallXBoldBlack">{formattedMonth}</ThemedText>  {/* Exibe o mês com primeira letra maiúscula */}
          <ThemedText type="largeBold">{dayOfMonth}</ThemedText>  {/* Exibe o dia com zero à esquerda se necessário */}
        </Pressable>
      </BackgroundGradientVertical>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    paddingBottom: 4,
  },
  circleContainer: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});