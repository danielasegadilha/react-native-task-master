import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradientHorizontal from './background/BackgroundGradientHorizontal';
import Entypo from '@expo/vector-icons/build/Entypo';
import { ThemedText } from './ThemedText';
import SimpleButton from '@/components/button/SimpleButton';
import DefaultInput from './DefaultInput';
import DefaultDropdown from './dropdown/DefaultDropdown';

interface ModalTaskItemProps {
    taskTitle: string;
    taskDescription?: string;
    colors: string[];
    isModalVisible: boolean;  // Recebe a visibilidade do modal como propriedade
    toggleModal: () => void;  // Recebe a função toggleModal para controlar o modal
}
  
export default function ModalTaskItem({ taskTitle, taskDescription, colors, isModalVisible, toggleModal }: ModalTaskItemProps) {
    console.log('isModalVisible:', isModalVisible);
    
    return (
        <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal} style={styles.taskContainer}
        >
        <View style={styles.modalOverlay}>
            <LinearGradient
                    colors={['#0A150A', 'rgba(26, 31, 37, 0.5)']}
                    style={styles.gradientBackground}
                />
            <View style={styles.modalContainer}>
            {/* <ThemedText type="title" style={styles.modalTitle}>{taskTitle}</ThemedText> */}
            <View style={styles.titleContainer}>
                <BackgroundGradientHorizontal style={styles.title}>
                    <ThemedText type="defaultSemiBold" >Teste</ThemedText>
                </BackgroundGradientHorizontal>
            </View>
            {/* <View style={styles.modalActions}>
                <SimpleButton text="Close" onPress={toggleModal} />
            </View> */}
            <View style={styles.taskInfoContainer}>
                <DefaultInput label={'Title'} placeholder={'Teste'}></DefaultInput>
                <DefaultInput label={'Notes'} placeholder={'Enter notes'}></DefaultInput> 
        {/* Nao precisa ser obrigatorio */}
        
        <DefaultDropdown label={'Priority'} placeholder={'Select priority'} options={["Low", "Medium", "High"]}></DefaultDropdown>
        {/* Nao precisa ser obrigatorio */}

        <DefaultDropdown label={'Shift'} placeholder={'Select shift'} options={["Morning", "Afternoon", "Evening"]}></DefaultDropdown>
            </View>
            </View>
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
    height: Dimensions.get('window').height * 0.1, // 20% da altura da tela
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
  title: {
    alignItems: 'center',
    paddingVertical: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
  },
  taskInfoContainer: {
    padding: 20,
    width: '100%'
  }
});

