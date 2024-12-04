import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'defaultWhite' | 'defaultGray' | 'defaultMedium' | 'defaultMediumWhite' | 'defaultSemiBold' | 'defaultBoldWhite' | 'defaultBold' | 'small' | 'smallSemiBold' | 'smallXBold' | 'smallXBoldBlack'| 'smallXBoldWhite' | 'smallXBoldBlack' | 'largeBold' | 'title' | 'placeholder';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'defaultWhite',
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { fontFamily: 'Inter' },
        type === 'defaultWhite' && { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 24, color: '#FFFFF1' },
        type === 'defaultGray' && { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'defaultMedium' && { fontFamily: 'Inter_500Medium', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'defaultMediumWhite' && { fontFamily: 'Inter_500Medium', fontSize: 14, lineHeight: 24, color: '#FFFFF1' },
        type === 'defaultSemiBold' && { fontFamily: 'Inter_600SemiBold', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'defaultBoldWhite' && { fontFamily: 'Inter_700Bold', fontSize: 14, lineHeight: 24, color: '#B7B7B7' },
        type === 'defaultBold' && { fontFamily: 'Inter_900Black', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'small' && { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 24, color: '#A0A0A1' },
        type === 'smallSemiBold' && { fontFamily: 'Inter_600SemiBold', fontSize: 12, lineHeight: 24, color: '#B4B7BA' },
        type === 'smallXBold' && { fontFamily: 'Inter_700Bold', fontSize: 10, lineHeight: 8, color: '#D1D1D6' },
        type === 'smallXBoldBlack' && { fontFamily: 'Inter_700Bold', fontSize: 10, lineHeight: 14, color: '#2B323A' },
        type === 'smallXBoldWhite' && { fontFamily: 'Inter_700Bold', fontSize: 10, lineHeight: 24, color: '#EFF7FF' },
        type === 'largeBold' && { fontFamily: 'Inter_700Bold', fontSize: 18, lineHeight: 24, color: '#2B323A' },
        type === 'title' && { fontFamily: 'Inter_600SemiBold', fontSize: 18, lineHeight: 24, color: '#FFFFF1' },
        type === 'placeholder' && { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 24, color: '#A0A0A1' },
        style,
      ]}
      {...rest}
    />
  );
}