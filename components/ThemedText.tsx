import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'defaultWhite' | 'defaultGray' | 'defaultMedium' | 'defaultBoldWhite' | 'defaultBold' | 'small' | 'smallSemiBold' | 'smallXBold' | 'smallXBoldWhite' | 'smallXBoldBlack' | 'largeBlack' | 'title';
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
        { color, fontFamily: 'Inter' },
        type === 'defaultWhite' && { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 24, color: '#B2B2B1' },
        type === 'defaultGray' && { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 24, color: '#2B323A' },
        type === 'defaultMedium' && { fontFamily: 'Inter_500Medium', fontSize: 16, lineHeight: 24, color: '#2B323A' },
        type === 'defaultBoldWhite' && { fontFamily: 'Inter_700Bold', fontSize: 16, lineHeight: 24, color: '#D1D3D5' },
        type === 'defaultBold' && { fontFamily: 'Inter_900Black', fontSize: 16, lineHeight: 24, color: '#2B323A' },
        type === 'small' && { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 24, color: '#A0A0A1' },
        type === 'smallSemiBold' && { fontFamily: 'Inter_600SemiBold', fontSize: 14, lineHeight: 24, color: '#B4B7BA' },
        type === 'smallXBold' && { fontFamily: 'Inter_700Bold', fontSize: 12, lineHeight: 24, color: '#D1D1D6' },
        type === 'smallXBoldWhite' && { fontFamily: 'Inter_700Bold', fontSize: 12, lineHeight: 24, color: '#EFF7FF' },
        type === 'smallXBoldBlack' && { fontFamily: 'Inter_700Bold', fontSize: 12, lineHeight: 24, color: '#2B323A' },
        type === 'largeBlack' && { fontFamily: 'Inter_900Black', fontSize: 20, lineHeight: 24, color: '#2B323A' },
        type === 'title' && { fontFamily: 'Inter_700Bold', fontSize: 20, lineHeight: 24, color: '#D1D3D5' },
        style,
      ]}
      {...rest}
    />
  );
}