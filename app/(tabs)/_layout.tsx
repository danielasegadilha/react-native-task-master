import { Slot, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SQLiteProvider } from 'expo-sqlite';
// import { initializeDatabase } from '../database/initializeDatabase';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Entypo } from '@expo/vector-icons';

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
          height: 60,
          borderTopWidth: 0,
        },
      }}>
      <Tabs.Screen
        name="index" // Nome da tela de "Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="taskList" // Nome da tela de tarefas
        options={{
          title: 'Task List',
          tabBarIcon: ({ color }) => <TabBarIcon name={'list-circle'} color={color} />,
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
