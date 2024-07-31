import { View, Text ,TextInput,StyleSheet,TouchableOpacity,Platform,Alert} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation ,useRouter} from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { auth } from '@/configs/FireBaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()
  const router = useRouter()

  useEffect(() => {

    navigation.setOptions({
      headerShown: false
    })


  }, [])

  const onSignIn = () => {


      if(email === '' || password === ''){
        if(Platform.OS === 'ios'){
          Alert.alert('Please fill all fields')
        }else{
          ToastAndroid.show('Please fill all fields', ToastAndroid.LONG)
        }
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const {user} = userCredential;
          router.replace('/mytrip')
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode === 'auth/invalid-credential'){
            if(Platform.OS === 'ios'){
              Alert.alert('Please Enter correct Details')
            }else{
              ToastAndroid.show('Please enter correct details', ToastAndroid.LONG)
            }
          }
        });
  }
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: Colors.White,
        height: '100%',
        paddingTop: 80,
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          marginTop: 20,
        }}
      >Let's Sign You In</Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'outfit',
          marginTop: 20,
          color: Colors.Gray
        }}
      >Welcome back,</Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'outfit',
          marginTop: 10,
          color: Colors.Gray
        }}
      >You've Been missed!</Text>



      {/* Email */}
      <View
      style={{
        marginTop: 50
      }}
      >
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
          }}
        >Email</Text>
        <TextInput
        style={styles.input}
        placeholder="Email" 
        onChangeText={(value) => setEmail(value)}
        />
      </View>

      {/* Password */}
      <View
      style={{
        marginTop: 50
      }}
      >
        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
          }}
        >Password</Text>
        <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        />
      </View>


      {/* Sign In Button */}
      <TouchableOpacity 
        onPress={onSignIn}
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
            fontFamily: 'outfit'
          }}
        >Sign in </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity 
        onPress={() => router.replace('auth/sign-up')}
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
            fontFamily: 'outfit'
          }}
        >Create Account </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:20,
    borderWidth:1,
    borderColor:Colors.Gray,
    borderRadius:99,
    fontFamily:'outfit',
    marginTop:10
  }
});