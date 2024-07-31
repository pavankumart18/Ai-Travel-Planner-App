import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightInfo}) {
  return (
    <View
      style={{
        marginTop: 20,
        padding: 20,
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        borderWidth: 1,

      }}
    > 
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      
      >
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 20,
        }}
      >✈️   Flights</Text>
        <TouchableOpacity
        style={{
          backgroundColor: Colors.Black,
          padding: 5,
          width: 100,
          marginTop: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: Colors.White,
            textAlign: 'center',
            fontFamily: 'outfit',
          }}
        >Book Here</Text>
      </TouchableOpacity>

      </View>
      <Text 
        style={{
          fontFamily: 'outfit',
          fontSize: 16,
          color: Colors.Gray,
          marginTop: 5,
        }}
      >Airline: {flightInfo?.airline}</Text>
      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 16,
          color: Colors.Gray,
          marginTop: 5,
        }}
      >Price: {flightInfo?.price}</Text>

    </View>
  )
}