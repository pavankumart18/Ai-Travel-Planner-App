import { View, Text } from 'react-native'
import React,{useContext, useEffect} from 'react'
import {useRouter,useNavigation} from 'expo-router'
import { Colors } from '@/constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from '@/context/CreateTripContext'
export default function SearchPlace() {

    const {tripData,setTripData} = useContext(CreateTripContext);

    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search Place',
        })
    }
    , [])

    useEffect(() => {
        console.log(tripData)
    }
    , [tripData])
  return (
    <View
        style={{
            padding: 25,
            paddingTop: 100,
            backgroundColor: Colors.White,
            height: '100%',
        }}
    >
      
    <GooglePlacesAutocomplete
        placeholder='Search Place'
        fetchDetails={true}
        onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data.description)
            // console.log(details?.geometry.location)
            // console.log(details?.photos[0]?.photo_reference)
            // console.log(details?.url)
            setTripData({
                locationInfo:{
                    name: data.description,
                    coordinates: details?.geometry.location,
                    photoRef: details?.photos[0]?.photo_reference,
                    url: details?.url
                }
            })
            router.push('/create-trip/select-traveler')
        }}
        query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY, // API KEY
            language: 'en',
        }}
        styles={{
            textInput: {
                height: 50,
                fontSize: 18,
                fontFamily: 'outfit',
                backgroundColor: Colors.White,
                borderRadius: 99,
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.Gray,
                marginTop: 25,
            },
        }}
        />
        
      
    </View>
  )
}