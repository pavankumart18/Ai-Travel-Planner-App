import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import {Colors} from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';
export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.Black,
        }}
    >
        <Tabs.Screen name="mytrip" 
            options={{
                tabBarLabel: 'My Trip',
                tabBarIcon: ({ color, size }) => <Ionicons name="location-sharp" size={24} color={color} />
            }}
        />
        <Tabs.Screen name="discover" 
            options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({ color, size }) => <Ionicons name="globe-sharp" size={24} color={color} />
            }}
        />
        <Tabs.Screen name="profile" 
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => <Ionicons name="people-circle" size={24} color="black" />
            }}
        />
    </Tabs>
  )
}