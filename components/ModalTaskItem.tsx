import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradientHorizontal from './background/BackgroundGradientHorizontal';
import Entypo from '@expo/vector-icons/build/Entypo';
import { ThemedText } from './ThemedText';
import SimpleButton from '@/components/button/SimpleButton';
import DefaultInput from './DefaultInput';
import DefaultDropdown from './dropdown/DefaultDropdown';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

interface ModalTaskItemProps {
    taskTitle: string;
    taskDescription?: string;
    colors: string[];
    isModalVisible: boolean;  // Recebe a visibilidade do modal como propriedade
    toggleModal: () => void;  // Recebe a função toggleModal para controlar o modal
}
  
export default function ModalTaskItem({ taskTitle, taskDescription, colors, isModalVisible, toggleModal }: ModalTaskItemProps) {
    const translateY = new Animated.Value(0);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationY: translateY } }],
        { useNativeDriver: true }
    );

    const onHandlerStateChange = (event: any) => {
        if (event.nativeEvent.state === State.END) {
          const { translationY } = event.nativeEvent;

          if (translationY > 100) {
              Animated.timing(translateY, {
                  toValue: Dimensions.get('window').height, // Sai pela parte inferior da tela
                  duration: 300,
                  useNativeDriver: true,
              }).start(() => {
                  toggleModal(); // Fecha o modal
                  translateY.setValue(0); // Reseta para a próxima abertura
              });
            } else {
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start(); // Volta à posição original
            }
        }
    };

    return (
        <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={toggleModal} style={styles.taskContainer}
        >
        <View style={styles.modalOverlay}>
            <LinearGradient
                    colors={['rgba(10, 21, 10, 0.6)', 'rgba(26, 31, 37, 0.2)']}
                    style={styles.gradientBackground}
                />
            <Animated.View
                style={[
                    styles.modalContainer,
                    { transform: [{ translateY }] },
                ]}
            >
                <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                    <View style={styles.titleContainer}>
                        <BackgroundGradientHorizontal style={styles.title}>
                        <View style={styles.dragIndicator} />
                            <ThemedText type="defaultSemiBold">Finish the TaskMaster Wireframe</ThemedText>
                        </BackgroundGradientHorizontal>
                    </View>
                </PanGestureHandler>
                <View style={styles.taskInfoContainer}>
                    <DefaultInput label={'Title'} placeholder={'Teste'} />
                
                    <View style={styles.rowContainer}>
          <DefaultDropdown label={'Priority'} placeholder={'Select priority'} options={["Low", "Medium", "High"]}></DefaultDropdown>
          {/* Nao precisa ser obrigatorio */}

          <DefaultDropdown label={'Shift'} placeholder={'Select shift'} options={["Morning", "Afternoon", "Evening"]}></DefaultDropdown>
        </View> 
        <View style={styles.rowContainer}>
          <DefaultDropdown label={'Difficulty'} placeholder={'Select difficulty'} options={["Hard", "Medium", "Easy"]}></DefaultDropdown>
          {/* Nao precisa ser obrigatorio */}

          <DefaultDropdown label={'Duration'} placeholder={'Select duration'} options={["Time-consuming", "Normal", "Quickly"]}></DefaultDropdown>
        </View> 
        <DefaultInput label={'Notes'} placeholder={'Enter notes'} />
                <DefaultDropdown label={'Status'} placeholder={'Select status'} options={['Finished', 'To do']}/>
                </View>
            </Animated.View>
        </View>
    </Modal>
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
    width: Dimensions.get('window').width,
    height: '100%', // 20% da altura da tela
},
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.80,
    backgroundColor: '#1A1F25',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
  },
  dragIndicator: {
    width: Dimensions.get('window').width * 0.1, // Largura da linha
    height: 2, // Altura da linha
    backgroundColor: 'rgba(43, 50, 58, 0.5)', // Cor da linha
    borderRadius: 2.5, // Borda arredondada para parecer uma alça
    alignSelf: 'center', // Centraliza horizontalmente
    marginBottom: 16,
    marginTop: 8, // Espaçamento abaixo (ajuste conforme necessário)
},
  title: {
    alignItems: 'center',
    paddingBottom: 16,
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

