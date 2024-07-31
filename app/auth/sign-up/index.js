import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ToastAndroid, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FireBaseConfig';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    console.log(email, password);

    if (email === '' || password === '') {
      if (Platform.OS === 'ios') {
        Alert.alert('Please fill all fields');
      } else {
        ToastAndroid.show('Please fill all fields', ToastAndroid.LONG);
      }
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const { user } = userCredential;
        router.replace('/mytrip');
        console.log(user);
        // Navigate to a different screen or show success message
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here, such as showing an alert
        if (Platform.OS === 'ios') {
          Alert.alert(errorMessage);
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.White,
        height: '100%',
        paddingTop: 80,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          marginTop: 20,
        }}
      >
        Create New Account
      </Text>
      {/* Username */}
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
          }}
        >
          UserName
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(value) => setUsername(value)}
        />
      </View>
      {/* Email */}
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
          }}
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      {/* Password */}
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      {/* Create Account Button */}
      <TouchableOpacity
        onPress={onCreateAccount}
        style={{
          padding: 20,
          backgroundColor: Colors.Black,
          borderRadius: 99,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.White,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'outfit',
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.White,
          borderWidth: 1,
          borderRadius: 99,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: Colors.Black,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'outfit',
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 99,
    fontFamily: 'outfit',
    marginTop: 10,
  },
});
