import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { ThemedText } from './ThemedText';

interface DefaultInputProps extends TextInputProps {
  label: string | undefined;
}

export default function DefaultInput({
  label,
  placeholder,
  value,
  onChangeText,
  ...rest
}: DefaultInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <ThemedText type="defaultBoldWhite" style={styles.label}>
        {label}
      </ThemedText>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value ?? ''} // Transforma null ou undefined em string vazia
        onChangeText={onChangeText}
        {...rest}
      />
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
  input: {
    height: 50,
    backgroundColor: '#272E34',
    borderColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#FFFCFB',
  },
  inputFocused: {
    borderWidth: 0,
  },
});
