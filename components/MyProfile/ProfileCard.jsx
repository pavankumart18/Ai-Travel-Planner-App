import { View, Text } from 'react-native'
import React from 'react'

export default function ProfileCard() {
  return (
    <View
        style={{
            padding: 20,
            backgroundColor: 'white',
            paddingTop: 50,
            height: '100%',
        }}
    >
      <Text
            style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                marginTop: 5
            }}
      
      >ProfileCard</Text>

      <View>
        <Text>
            Please redirect to home page this page is not yet designed
        </Text>
      </View>
    </View>
  )
}