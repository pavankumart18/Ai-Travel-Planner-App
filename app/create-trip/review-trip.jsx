import { View, Text ,TouchableOpacity} from 'react-native'
import React,{useEffect,useContext} from 'react'
import { useNavigation,useRouter } from 'expo-router'
import {Colors} from './../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import {CreateTripContext} from '@/context/CreateTripContext';
import moment from 'moment'
export default function ReviewTrip() {

    const navigation = useNavigation();
    const router = useRouter();
    const {tripData,setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    },[])

  return (
    <View
        style={{
            padding:25,
            paddingTop: 100,
            backgroundColor: Colors.White,
            height:'100%'
        }}
    >
      <Text
        style={{
            fontFamily:'outfit-bold',
            fontSize:30,
            marginTop: 20,
        }}
      >Review Your Trip</Text>
      <View
        style={{
            marginTop: 30,
        }}
      >
        <Text
            style={{
                fontFamily:'outfit-bold',
                fontSize:17,
            }}
        >Before generating Your trip ,please review your trip</Text>
      </View>
      <View
        style={{
            display:'flex',
            flexDirection:'row',
            marginTop: 30,
            alignItems:'center',
            gap: 20
        }}
      >
        <Ionicons name="location-sharp" size={40} color="black" />
        <View>
            <Text
                style={{
                    fontFamily:'outfit-bold',
                    fontSize:20,
                    color:Colors.Gray
                }}
            >Destination</Text>
            <Text
                style={{
                    fontFamily:'outfit-medium',
                    fontSize:20,
                }}
            >{tripData?.locationInfo.name}</Text>
        </View>
      </View>
      <View
        style={{
            display:'flex',
            flexDirection:'row',
            marginTop: 30,
            alignItems:'center',
            gap: 20
        }}
      >
        <Ionicons name="calendar" size={40} color="black" />
        <View>
            <Text
                style={{
                    fontFamily:'outfit-bold',
                    fontSize:20,
                    color:Colors.Gray
                }}
            >Travel Dates</Text>
            <Text
                style={{
                    fontFamily:'outfit-medium',
                    fontSize:20,
                }}
            >{moment(tripData?.startDate).format('DD MMM')+" To "+
            moment(tripData?.endDate).format('DD MMM')+ " ("+tripData?.totalDays+" Days)"}</Text>
            </View>
      </View>
      <View
        style={{
            display:'flex',
            flexDirection:'row',
            marginTop: 30,
            alignItems:'center',
            gap: 20
        }}
      >
        <Ionicons name="person" size={40} color="black" />
        <View>
            <Text
                style={{
                    fontFamily:'outfit-bold',
                    fontSize:20,
                    color:Colors.Gray
                }}
            >Who is Traveling</Text>
            <Text
                style={{
                    fontFamily:'outfit-medium',
                    fontSize:20,
                }}
            >{tripData?.traveler.title}</Text>
            </View>
      </View>
      <View
        style={{
            display:'flex',
            flexDirection:'row',
            marginTop: 30,
            alignItems:'center',
            gap: 20
        }}
      >
        <Ionicons name="cash-outline" size={40} color="black" />
        <View>
            <Text
                style={{
                    fontFamily:'outfit-bold',
                    fontSize:20,
                    color:Colors.Gray
                }}
            >Travelers</Text>
            <Text
                style={{
                    fontFamily:'outfit-medium',
                    fontSize:20,
                }}
            >{tripData?.budget.title}</Text>
            </View>
      </View>
      <TouchableOpacity
            onPress={()=>router.replace('/create-trip/generate-trip')}
          style={{
            padding: 20,
            backgroundColor: Colors.Black,
            borderRadius: 99,
            marginTop: 80,
            paddingHorizontal: 50,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.White,
              fontSize: 20,
              fontFamily: 'outfit-medium',
            }}
          >Build My Trip</Text>
        </TouchableOpacity>
    </View>
  )
}