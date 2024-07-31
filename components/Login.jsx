import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

  const router = useRouter()
  return (
    <View>
      <Image source={require('./../assets/images/login.png')} 
        style={{ width: '100%', height: 500 }}
      />
      <View style={styles.container}>

        <Text
            style={{ fontSize: 30, fontFamily: 'outfit-bold', textAlign: 'center', marginTop: 20 }}
        >AI Travel Planner</Text>
        <Text
            style={{ fontSize: 16, fontFamily: 'outfit', textAlign: 'center', marginTop: 20,color: Colors.Gray }}
        > Discover your next Adventure effortlessly, Personalized itineraries at your fingertips Travel Smarter with AI driven insights</Text>

        <TouchableOpacity style={styles.button}
            onPress={() => router.push('auth/sign-in')}
        
        >
            <Text
                style={{ color:Colors.White,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'outfit'
                }}
            >Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        padding: 25,
    },
    button:{
        padding:15,
        backgroundColor: Colors.Black,
        borderRadius: 99,
        marginTop: '25%',
    }
})
 