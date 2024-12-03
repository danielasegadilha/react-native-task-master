import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Picker } from '@react-native-picker/picker';


interface DefaultDropdownProps {
  label: string;
  placeholder: string;
  options: string[]
}

export default function DefaultDropdown({ label, placeholder, options }: DefaultDropdownProps) {
    const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <ThemedText type="defaultBoldWhite" style={styles.label}>
        {label}
      </ThemedText>
      <View style={styles.dropdownContainer}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {/* Placeholder */}
          <Picker.Item label={placeholder} value="" enabled={false}  style={styles.placeholder}/>

          {options.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} style={styles.option}/>
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  dropdownContainer: {
    borderRadius: 8,
    overflow: 'hidden', // Para garantir que o `borderRadius` seja aplicado ao conteúdo do Picker
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderWidth: 0,
    backgroundColor: '#272E34',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#A0A0A1',
    width: '100%',
    fontFamily: 'Inter_400Regular',
  },
  placeholder: {
    fontFamily: 'Inter_400Regular', // Ou o fontFamily desejado
    fontSize: 16,
    color: '#A0A0A1', // Cor do placeholder
  },
  option: {
    fontFamily: 'Inter_400Regular', // Ou o fontFamily desejado
    fontSize: 14,
    width: 50,
    color: '#A0A0A1', // Cor das opções
  },
});