import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import React from "react";

export default function BottomNavigation() {
    return (
        <Tabs
        initialRouteName="index"
        screenOptions={{
        tabBarActiveTintColor: '#05C921',
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
          tabBarIcon: ({ color }) => <TabBarIcon name={'home'} color={color} />,
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