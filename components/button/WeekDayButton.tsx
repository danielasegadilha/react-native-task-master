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


// // src/components/WeekDay.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native';
// import { ThemedText } from '../ThemedText';

// const WeekDayButton = () => {
//   const currentDate = new Date();
//   const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
//   const flatListRef = useRef<FlatList<Date>>(null);

//   // Função para gerar uma lista de 5 dias ao redor do dia atual
//   const generateDays = (): Date[] => {
//     const days: Date[] = [];
//     for (let i = -2; i <= 2; i++) {
//       const date = new Date();
//       date.setDate(currentDate.getDate() + i);
//       days.push(date);
//     }
//     return days;
//   };

//   const [days, setDays] = useState<Date[]>(generateDays);

//   useEffect(() => {
//     // Centralizar o dia atual na inicialização
//     if (flatListRef.current) {
//       flatListRef.current.scrollToIndex({ index: 2, animated: false });
//     }
//   }, []);

//   const formatDay = (date: Date): string => date.getDate().toString().padStart(2, '0');

//   const formatMonth = (date: Date): string => {
//     const month = date.toLocaleString('default', { month: 'short' }).replace('.', '');
//     return month.charAt(0).toUpperCase() + month.slice(1);
//   };

//   const handleDayPress = (date: Date): void => {
//     setSelectedDate(date);
//   };

//   const renderItem = ({ item }: { item: Date }) => {
//     const isSelected = item.toDateString() === selectedDate.toDateString();

//     return (
//       <Pressable
//         style={[
//           styles.dayContainer,
//           isSelected ? styles.selectedDay : null,
//         ]}
//         onPress={() => handleDayPress(item)}
//       >
//         <ThemedText type="smallXBoldBlack" style={isSelected ? styles.selectedText : null}>
//           {formatMonth(item)}
//         </ThemedText>
//         <ThemedText type="largeBold" style={isSelected ? styles.selectedText : null}>
//           {formatDay(item)}
//         </ThemedText>
//       </Pressable>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         ref={flatListRef}
//         data={days}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.toDateString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         getItemLayout={(_, index) => ({ length: 80, offset: 80 * index, index })}
//         initialScrollIndex={2}
//         onScrollToIndexFailed={() => {}}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 10,
//   },
//   dayContainer: {
//     width: 80,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 5,
//   },
//   selectedDay: {
//     backgroundColor: 'orange',
//     borderRadius: 20,
//     padding: 10,
//   },
//   selectedText: {
//     color: 'white',
//   },
// });

// export default WeekDayButton;
