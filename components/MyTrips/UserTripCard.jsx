import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
export default function UserTripCard({trip}) {

    const formatData = (data)=>{
        return JSON.parse(data)
    }
  return (
    <View
        style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        }}
    >
      {/* <Image 
        source={require('../../assets/images/placeholder.png')} 
        style={{
            width: 100, 
            height: 100,
            borderRadius: 15,
        }}
        /> */}
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
        +formatData(trip?.tripData).locationInfo.photoRef+
        '&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} 
        style={{
            width: 100, 
            height: 100,
            borderRadius: 15,
            objectFit: 'cover'
        }}
        />
        <View>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 18,
                }}
            >{trip?.tripPlan?.trip?.destination}</Text>
            <Text
                style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color:Colors.Gray
                }}
            >{moment(formatData(trip?.tripData).startDate).format('DD MMM YYYY')}</Text>
            <Text
                style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color:Colors.Gray
                }}
            >Traveling: {formatData(trip?.tripData).traveler.title}</Text>
        </View>
    </View>
  )
}