import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
export default function StartNewTripCard() {

    const router = useRouter()
  return (
    <View
        style={{
            padding: 20,
            marginTop: 15,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
        }}
    >
      <Ionicons name="location-sharp" size={50} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'outfit-medium',
          marginTop: 10,
        }}
      >No trips Planned Yet</Text>
    <Text
        style={{
          fontSize: 20,
          fontFamily: 'outfit',
          marginTop: 10,
          textAlign: 'center',
          color: Colors.Gray
        }}
      >Looks Like its time to plan a new travel experience! Get Started Below</Text>

    <TouchableOpacity
        onPress={()=>router.push('/create-trip/search-place')}
        style={{
            padding: 20,
            backgroundColor: Colors.Black,
            borderRadius: 99,
            marginTop: 20,
            paddingHorizontal: 50,
        }}
    >
        <Text
            style={{
                color: Colors.White,
                fontSize: 18,
                fontFamily: 'outfit-medium',
            }}
        >Start a New Trip</Text>
    </TouchableOpacity>
    </View>
  )
}