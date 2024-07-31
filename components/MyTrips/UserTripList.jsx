import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'
export default function UserTripList({userTrips}) {

    const latestTrip=JSON.parse(userTrips[0]?.tripData)
    const router = useRouter()
    const trip = JSON.stringify(userTrips[0])

  return (
    <View>
      <View
        style={{
            marginTop: 20,
        }}
      >
        {latestTrip?.locationInfo?.photoRef?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+latestTrip.locationInfo.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} 
        style={{
            width: '100%', 
            height: 250,
            borderRadius: 15,
            objectFit: 'cover'
            }}
        />
        :
        <Image source={require('../../assets/images/placeholder.png')} 
        style={{
            width: '100%', 
            height: 250,
            borderRadius: 15,
            objectFit: 'cover'
            }} />
        }
        <View
            style={{
                marginTop: 10,
            }}
        >
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                    marginTop: 5,
                }}
            >{userTrips[0]?.tripPlan?.trip?.destination}</Text>
            <View 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 10,
                    justifyContent: 'space-between'
                }}
            >
            <Text
                style={{
                    fontFamily: 'outfit',
                    fontSize: 16,
                    marginTop: 5,
                    color:Colors.Gray
                }}
            >{moment(latestTrip?.startDate).format('DD MMM YYYY')}</Text>
            <Text
                style={{
                    fontFamily: 'outfit',
                    fontSize: 16,
                    marginTop: 5,
                    color:Colors.Gray
                }}
            >🚌   {latestTrip?.traveler.title}</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    console.log(userTrips[0])
                    router.push({pathname:'/trip-details',params:{trip:trip}})
                }} 
                style={{
                    marginTop: 20,
                    backgroundColor: Colors.Black,
                    padding: 15,
                    borderRadius: 99,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 20,
                        color:Colors.White,
                        textAlign: 'center'
                    }}
                >See Your Plan</Text>
            </TouchableOpacity>
        </View>


        {userTrips.map((trip, index) => (
           <UserTripCard key={index} trip={trip} />
        ))}
      </View>
    </View>
  )
}