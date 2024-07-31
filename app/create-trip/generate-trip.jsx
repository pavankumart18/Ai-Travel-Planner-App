import { View, Text ,Image} from 'react-native'
import React ,{useContext,useState,useEffect,useRef}from 'react'
import { Colors } from '@/constants/Colors'
import {CreateTripContext} from '@/context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModel';
import { useRouter } from 'expo-router';
import { db } from '../../configs/FireBaseConfig'
import { doc, setDoc } from 'firebase/firestore';
import {auth} from '../../configs/FireBaseConfig'
export default function GenerateTrip() {
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const user = useRef(auth.currentUser);
    const {tripData,setTripData} = useContext(CreateTripContext);
    const GenerateTrip = async ()=>{
        console.log("Generating Started")
        setLoading(true)
        const FINAL_PROMPT = AI_PROMPT.replace('{location}',tripData?.locationInfo.name)
        .replace('{totalDays}',tripData?.totalDays)
        .replace('{totalNights}',tripData?.totalDays-1)
        .replace('{traveler}',tripData?.traveler.title)
        .replace('{budget}',tripData?.budget.title)
        .replace('{totalDays}',tripData?.totalDays)
        .replace('{totalNights}',tripData?.totalDays-1)

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log("Result Generated")
        setLoading(false)
        const tripResp=JSON.parse(result.response.text())
        const docID=(Date.now()).toString()
        const result_=await setDoc(doc(db, "UserTrips",docID), {
            userEmail: user.current.email,
            tripPlan: tripResp,//AI result
            tripData:JSON.stringify(tripData),//User selection data
            docID:docID
        });
        router.push('(tabs)/mytrip')
    }


    useEffect(()=>{
        tripData&&GenerateTrip()
    },[])
  return (
    <View
        style={{
            padding: 25,
            paddingTop: 100,
            backgroundColor: Colors.White,
            height: '100%',
            alignItems: 'center',
        }}
    >
      <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
        }}
      >Please Wait...</Text>
    <Text
        style={{
            fontFamily: 'outfit-medium',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 20,
        }}
      >We are working to generate you dream trip</Text>
      <Image 
      source={require('./../../assets/images/plane.gif')}
      style={{
            width: '100%',
            height: 200,
            marginTop: 50,
            borderRadius: 99,
            objectFit: 'contain',
        }}

      />
      <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
            marginTop: 50,
            color: Colors.Gray
        }}
      >
        Do not Go Back
      </Text>
    </View>
  )
}