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
        { color, fontFamily: 'Inter' },
        type === 'defaultWhite' && { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 24, color: '#FFFFF1' },
        type === 'defaultGray' && { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 24, color: '#D1D1D6' },
        type === 'defaultMedium' && { fontFamily: 'Inter_500Medium', fontSize: 16, lineHeight: 24, color: '#2B323A' },
        type === 'defaultBoldWhite' && { fontFamily: 'Inter_700Bold', fontSize: 16, lineHeight: 24, color: '#D1D3D5' },
        type === 'defaultBold' && { fontFamily: 'Inter_900Black', fontSize: 16, lineHeight: 24, color: '#2B323A' },
        type === 'small' && { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 24, color: '#D1D1D6' },
        type === 'smallBold' && { fontFamily: 'Inter_700Bold', fontSize: 14, lineHeight: 24, color: '#D1D3D5' },
        type === 'smallXBold' && { fontFamily: 'Inter_700Bold', fontSize: 12, lineHeight: 24, color: '#D1D1D6' },
        type === 'smallXBoldWhite' && { fontFamily: 'Inter_700Bold', fontSize: 12, lineHeight: 24, color: '#EFF7FF' },
        type === 'smallXBoldBlack' && { fontFamily: 'Inter_700Bold', fontSize: 12, lineHeight: 24, color: '#2B323A' },
        style,
      ]}
      {...rest}
    />
  );
}