import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradientHorizontal from './background/BackgroundGradientHorizontal';
import Entypo from '@expo/vector-icons/build/Entypo';
import { ThemedText } from './ThemedText';
import SimpleButton from '@/components/button/SimpleButton';

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
            <View style={styles.modalContainer}>
            <ThemedText type="title" style={styles.modalTitle}>{taskTitle}</ThemedText>
            <Text style={styles.modalDescription}>{taskDescription || 'No additional details provided.'}</Text>

            {/* <View style={styles.modalActions}>
                <SimpleButton text="Close" onPress={toggleModal} />
            </View> */}
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
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareBase: {
    height: 24,
    width: 24,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: '#1A1F25',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.80,
    padding: 20,
    backgroundColor: '#1A1F25',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

