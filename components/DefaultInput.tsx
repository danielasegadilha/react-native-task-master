import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, Platform } from 'react-native';
import { ThemedText } from './ThemedText';

interface DefaultInputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

export default function DefaultInput({ label, placeholder, ...rest }: DefaultInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const showPlaceholder = !isFocused && !value;

  return (
    <View style={styles.container}>
      <ThemedText type="defaultBoldWhite" style={styles.label}>
        {label}
      </ThemedText>
      <View>
        {showPlaceholder && (
          <ThemedText type="defaultWhite" style={styles.placeholder}>
            {placeholder}
          </ThemedText>
        )}
        <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
          ]}
          value={value}
          onChangeText={setValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
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
  input: {
    height: 50,
    backgroundColor: '#272E34',
    borderColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFCFB',
  },
  inputFocused: {
    borderWidth: 0,
  },
  placeholder: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
});