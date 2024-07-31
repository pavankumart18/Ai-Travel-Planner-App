import { View, Text } from 'react-native'
import React from 'react'

export default function DiscoveryCard() {
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
      >
            🏕️ Discover
            <View
                style={{
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 16,
                        marginTop: 5,
                        color: 'gray'
                    }}
                > Please redirect to home page this page is not yet designed </Text>
            </View>
      
      
      </Text>
    </View>
  )
}