import { Slot, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '../database/initializeDatabase';
import BottomNavigation from './bottomNavigation';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SQLiteProvider databaseName="database.db" onInit={initializeDatabase}>
      <Slot></Slot>
      <BottomNavigation></BottomNavigation>
    </SQLiteProvider>
  );
}
