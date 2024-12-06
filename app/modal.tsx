import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/build/Entypo';
import SimpleButton from '@/components/button/SimpleButton';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import BackgroundGradientHorizontal from '@/components/background/BackgroundGradientHorizontal';
import { ThemedText } from '@/components/ThemedText';
import DefaultInput from '@/components/DefaultInput';
import { router } from 'expo-router';
import { Tasks } from './types/Tasks';
import { useSearchParams } from 'expo-router/build/hooks';
import DefaultDropdown from '@/components/dropdown/DefaultDropdown';
import { updateTask } from '@/database/tasksRepository';

interface ModalTaskItemProps {
    taskTitle: string;
    taskDescription?: string;
    colors: string[];
    isModalVisible: boolean;  // Recebe a visibilidade do modal como propriedade
    toggleModal: () => void;  // Recebe a função toggleModal para controlar o modal
}
  
export default function Modal({ isModalVisible, toggleModal }: ModalTaskItemProps) {
    const translateY = new Animated.Value(0);
    const panRef = useRef(null);
    const searchParams = useSearchParams(); // Retorna uma instância de URLSearchParams
    const task = searchParams.get('task');

  // Se o parâmetro task existir, faça o parse do JSON
    const parsedTask: Tasks = task ? JSON.parse(decodeURIComponent(task as string)) : null;

    const [taskState, setTaskState] = useState<Omit<Tasks, 'id'>>({
        title: parsedTask?.title || "",  // Usa valor padrão caso parsedTask seja null
        description: parsedTask?.description || "",
        deadline: new Date().toISOString(),
        priority: parsedTask?.priority || "Low",  // Valor padrão 'Low' se parsedTask for null
        shift: parsedTask?.shift || "Morning",  // Valor padrão 'Morning' se parsedTask for null
        difficulty: parsedTask?.difficulty || "Easy",  // Valor padrão 'Easy'
        duration: parsedTask?.duration || "Normal",  // Valor padrão 'Normal'
        note: parsedTask?.note || "",  // Valor padrão '' se parsedTask for null
        status: parsedTask?.status || 0,
    });
      
    const handleInputChange = (field: keyof Omit<Tasks, 'id'>, value: any) => {
        setTaskState((prev) => ({ ...prev, [field]: value }));
    };

    const onGestureEvent = (event: any) => {
      const { translationY } = event.nativeEvent;
      translateY.setValue(translationY); // Atualiza manualmente o valor de translateY com o gesto
    };

    const onHandlerStateChange = (event: any) => {
        if (event.nativeEvent.state === State.END) {
          const { translationY } = event.nativeEvent;

          if (translationY > 100) {

            if (JSON.stringify(taskState) !== JSON.stringify(parsedTask)) {
                // Se houver alteração, salva no banco de dados
                updateTask({
                    ...parsedTask, // Supondo que 'parsedTask' tenha o ID
                    ...taskState,  // As alterações feitas pelo usuário
                }).catch((error) => console.error('Erro ao salvar a tarefa:', error));
            }
              Animated.timing(translateY, {
                  toValue: Dimensions.get('window').height, // Sai pela parte inferior da tela
                  duration: 300,
                  useNativeDriver: false,
              }).start(() => {
                router.push('/');
                  translateY.setValue(0); // Reseta para a próxima abertura
              });

            } else {
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start(); // Volta à posição original
            }
        }
    }

        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
              <View style={styles.modalOverlay}>
                <LinearGradient
                  colors={['rgba(20, 25, 30, 0.8)', 'rgba(20, 25, 30, 0.2)']}
                  style={styles.gradientBackground}
                />
                <Animated.View
                  style={[
                    styles.modalContainer,
                    { transform: [{ translateY }, { translateX: 0 }] },
                  ]}
                >
                  <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                    onHandlerStateChange={onHandlerStateChange} ref={panRef}
                  >
                    <View style={styles.titleContainer}>
                      <BackgroundGradientHorizontal style={styles.title}>
                        <View style={styles.dragIndicator} />
                        <ThemedText type="defaultSemiBold">{`${parsedTask.title}`}</ThemedText>
                      </BackgroundGradientHorizontal>
                    </View>
                  </PanGestureHandler>
                  <View style={styles.taskInfoContainer}>

                    <DefaultInput label={taskState.title} placeholder={`${parsedTask.title}`} />
                    <View style={styles.rowContainer}>
                      <DefaultDropdown label={'Priority'} placeholder={'Select priority'} options={["Low", "Medium", "High"]} value={`${parsedTask.priority}`} onValueChange={(value) => handleInputChange('priority', value)}/>
      
                      <DefaultDropdown label={'Shift'} placeholder={'Select shift'} options={["Morning", "Afternoon", "Evening"]} value={`${parsedTask.shift}`} onValueChange={(value) => handleInputChange('shift', value)} />
                    </View>
                    <View style={styles.rowContainer}>
                      <DefaultDropdown label={'Difficulty'} placeholder={'Select difficulty'} options={["Hard", "Medium", "Easy"]} value={`${parsedTask.difficulty}`} onValueChange={(value) => handleInputChange('difficulty', value)} />
                      <DefaultDropdown label={'Status'} placeholder={'Select status'} options={['Finished', 'Pending']}  value={`${parsedTask.status}`} onValueChange={(value) => handleInputChange('status', value)}/>
                      {/* <DefaultDropdown label={'Duration'} placeholder={'Select duration'} options={["Time-Consuming", "Normal", "Quickly"]} value={`${parsedTask.duration}`} onValueChange={(value) => handleInputChange('duration', value)}/> */}
                    </View>
                    <DefaultInput label={'Notes'} placeholder={'Enter notes'} />
                  </View>
                </Animated.View>
              </View>
            </GestureHandlerRootView>
        );
      };
      
const styles = StyleSheet.create({
  taskContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 8,
    position: 'relative',
    backgroundColor: '#1A1F25',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%', // 20% da altura da tela
},
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#1A1F25',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    height: 50,
  },
  dragIndicator: {
    width: '10%', // Largura da linha
    height: 2, // Altura da linha
    backgroundColor: 'rgba(43, 50, 58, 0.5)', // Cor da linha
    borderRadius: 2.5, // Borda arredondada para parecer uma alça
    alignSelf: 'center', // Centraliza horizontalmente
    marginBottom: 8,

},
  title: {
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  taskInfoContainer: {
    padding: 20,
    width: '100%',
    backgroundColor: '#1A1F25',
  }
});
