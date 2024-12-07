import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (


      <Tabs
        initialRouteName="index"
        screenOptions={{
        tabBarActiveTintColor: '#CDCDCD',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1A1F25',
          paddingBottom: 16,
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="index" // Nome da tela de "Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notes" // Nome da tela de tarefas
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => <MaterialIcons name="edit-note" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bullet" // Nome da tela de tarefas
        options={{
          title: 'Bullet',
          tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} />,
        }}
      />
    </Tabs>

  );
}
