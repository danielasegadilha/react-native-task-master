import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '../database/initializeDatabase';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarActiveTintColor: '#05C921',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#161616', // Cor da barra de navegação inferior
            paddingBottom: 10, // Padding inferior da barra
            height: 60,
            borderTopWidth: 0,
          },
        }}>
          <Tabs.Screen
          name="index" // Nome da tela de "Home"
          options={{
            title: 'Home', // Texto exibido na barra de navegação
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={'home'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="taskList" // Nome da tela de tarefas
          options={{
            title: 'Task List',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={'list-circle'} color={color} />
            ),
          }}
        />
        <SQLiteProvider databaseName="database.db" onInit={initializeDatabase}>
          <Tabs.Screen
            name="newTask" // Nome da tela de nova tarefa
            options={{
              title: 'New Task',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={'add-circle'} color={color} />
              ),
            }}
          />
        </SQLiteProvider>
      </Tabs>
  );
}
