// src/components/TaskItem.tsx
import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundGradientProps {
    children: ReactNode;
    style?: object;
    colors?: string[]; // Garante pelo menos dois elementos no array
}

export default function BackgroundGradientHorizontal({ children, style, colors= ['#FFDF95', '#FECD71', '#FCA521'], }: BackgroundGradientProps) {
  return (
      <LinearGradient
      colors={colors} // Cores do gradiente
      start={{ x: 0, y: 0 }} // Início do gradiente (0% no topo)
      end={{ x: 1, y: 0 }} // Fim do gradiente (100% na parte inferior)
      style={[{ flex: 1 }, style]} // Estilo do container que vai ter o gradiente
    >
        {children}
    </LinearGradient>
  );
}