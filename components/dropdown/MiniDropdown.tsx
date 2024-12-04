import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Picker } from '@react-native-picker/picker';


interface DefaultDropdownProps {
  placeholder: string;
  options: string[]
}

export default function MiniDropdown({ placeholder, options }: DefaultDropdownProps) {
    const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Picker style={styles.dropdown} selectedValue={selectedValue} onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        <Picker.Item label={placeholder} value="" enabled={false} style={styles.placeholder}/>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} style={styles.option}/>
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  dropdown: {
    height: 20,
    borderWidth: 0,
    backgroundColor: '#1A1F25',
    fontSize: 14,
    color: '#F2F2F2',
    width: '85%',
  },
  placeholder: {
    fontFamily: 'Inter_400Regular', // Ou o fontFamily desejado
    fontSize: 14,
    color: '#F2F2F2', // Cor do placeholder
  },
  option: {
    fontFamily: 'Inter_400Regular', // Ou o fontFamily desejado
    fontSize: 14,
    color: '#A0A0A1', // Cor das opções
  },
});