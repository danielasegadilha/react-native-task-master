import { Slot, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SQLiteProvider } from 'expo-sqlite';
// import { initializeDatabase } from '../database/initializeDatabase';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
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
          backgroundColor: '#161616',
          paddingBottom: 10,
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
        name="taskList" // Nome da tela de tarefas
        options={{
          title: 'Task List',
          tabBarIcon: ({ color }) => <MaterialIcons name="checklist-rtl" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="newTask" // Nome da tela de nova tarefa
        options={{
          title: 'New Task',
          tabBarIcon: ({ color }) => <TabBarIcon name={'add-circle'} color={color} />,
        }}
      />
    </Tabs>

  );
}
