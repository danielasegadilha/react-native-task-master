import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: '#05C921',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#303030', // Cor da barra de navegação inferior
          paddingBottom: 10, // Padding inferior da barra
          height: 60,
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="taskList" // Nome da tela de tarefas
        options={{
          title: 'Task List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="newTask" // Nome da tela de nova tarefa
        options={{
          title: 'New Task',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
