import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { auth } from '../../configs/FireBaseConfig';
import { useRef } from 'react';
import {db} from '../../configs/FireBaseConfig'
import { query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import UserTripList from '../../components/MyTrips/UserTripList';
export default function MyTrip() {

    const [userTrips, setUserTrips] = useState([])
    const user = auth.currentUser
    const [loading, setLoading] = useState(false)




  const GetMyTrips = async () => {
    setLoading(true)
    setUserTrips([])
    const q=query(collection(db,'UserTrips'),where('userEmail','==',user.email))
    const querySnapshot = await getDocs(q);
    console.log("Hii")
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      console.log(`${doc.id} => ${doc.data()}`);
      setUserTrips([...userTrips,doc.data()])
    });
    setLoading(false)

  }
  useEffect(() => {
      GetMyTrips()
  }
  ,[user])


  return (
    <ScrollView
     style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.White,
        height: '100%',
     }}
    >
    <View
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            justifyContent: 'space-between',
        }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: 'outfit-bold',
        }}
      >My Trips</Text>
      <Ionicons name="add-circle" size={50} color="black" />
      </View>

      {loading&&<ActivityIndicator size="large" color={Colors.Black} />}
      {userTrips.length==0?
        <StartNewTripCard />
        :<UserTripList userTrips={userTrips}/>
    }
    </ScrollView>
  )
}