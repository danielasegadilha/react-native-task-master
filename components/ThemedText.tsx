import { Text, type TextProps } from 'react-native';

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
        { fontFamily: 'Roboto_400Regular' },
        type === 'defaultWhite' && { fontFamily: 'Roboto_400Regular', fontSize: 14, lineHeight: 24, color: '#FFFFF1' },
        type === 'defaultGray' && { fontFamily: 'Roboto_400Regular', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'defaultMedium' && { fontFamily: 'Roboto_500Medium', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'defaultMediumWhite' && { fontFamily: 'Roboto_500Medium', fontSize: 14, lineHeight: 24, color: '#FFFFF1' },
        type === 'defaultSemiBold' && { fontFamily: 'Roboto_700Bold', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'defaultBoldWhite' && { fontFamily: 'Roboto_700Bold', fontSize: 14, lineHeight: 24, color: '#B7B7B7' },
        type === 'defaultBold' && { fontFamily: 'Roboto_900Black', fontSize: 14, lineHeight: 24, color: '#2B323A' },
        type === 'small' && { fontFamily: 'Roboto_400Regular', fontSize: 12, lineHeight: 24, color: '#A0A0A1' },
        type === 'smallSemiBold' && { fontFamily: 'Roboto_700Bold', fontSize: 12, lineHeight: 24, color: '#B4B7BA' },
        type === 'smallXBold' && { fontFamily: 'Roboto_700Bold', fontSize: 10, lineHeight: 8, color: '#D1D1D6' },
        type === 'smallXBoldBlack' && { fontFamily: 'Roboto_700Bold', fontSize: 10, lineHeight: 14, color: '#2B323A' },
        type === 'smallXBoldWhite' && { fontFamily: 'Roboto_700Bold', fontSize: 10, lineHeight: 24, color: '#EFF7FF' },
        type === 'largeBold' && { fontFamily: 'Roboto_700Bold', fontSize: 18, lineHeight: 24, color: '#2B323A' },
        type === 'title' && { fontFamily: 'Roboto_700Bold', fontSize: 18, lineHeight: 24, color: '#FFFFF1' },
        type === 'placeholder' && { fontFamily: 'Roboto_400Regular', fontSize: 14, lineHeight: 24, color: '#A0A0A1' },
        style,
      ]}
      {...rest}
    />
  );  
}