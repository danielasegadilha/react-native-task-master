import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'defaultWhite' | 'defaultGray' | 'defaultMedium' | 'defaultBoldWhite' | 'defaultBold' | 'small' | 'smallBold' | 'smallXBold' | 'smallXBoldWhite' | 'smallXBoldBlack';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'defaultWhite',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color, fontFamily: 'Roboto' },
        type === 'defaultWhite' ? styles.defaultWhite : undefined,
        type === 'defaultGray' ? styles.defaultGray : undefined,
        type === 'defaultMedium' ? styles.defaultMedium : undefined,
        type === 'defaultBoldWhite' ? styles.defaultBoldWhite : undefined,
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'smallBold' ? styles.smallBold : undefined,
        type === 'smallXBold' ? styles.smallXBold : undefined,
        type === 'smallXBoldWhite' ? styles.smallXBoldWhite : undefined,
        type === 'smallXBoldBlack' ? styles.smallXBoldBlack : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  defaultWhite: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'regular',
    color: '#FFFFF1',
  },
  defaultGray: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'regular',
    color: '#D1D1D6',
  },
  defaultBoldWhite: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#D1D3D5',
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'black',
    color: '#2B323A',
  },
  defaultMedium: {
    fontSize: 16,
    fontWeight: 'medium',
    lineHeight: 24,
    color: '#2B323A',
  },
  small: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'regular',
    color: '#D1D1D6',
  },
  smallBold: {
    lineHeight: 24,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D1D3D5',
  },
  smallXBold: {
    lineHeight: 24,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D1D1D6',
  },
  smallXBoldWhite: {
    lineHeight: 24,
    fontSize: 12,
    fontWeight: 900,
    color: '#EFF7FF',
  },
  smallXBoldBlack: {
    lineHeight: 24,
    fontSize: 12,
    fontWeight: 900,
    color: '#2B323A',
  },
  largeBoldWhite: {
    lineHeight: 24,
    fontSize: 20,
    fontWeight: 900,
    color: '#EFF7FF',
  },
  largeBoldBlack: {
    lineHeight: 24,
    fontSize: 20,
    fontWeight: 900,
    color: '#2B323A',
  },
});
