import { View, Text ,Image, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { GetGooglePhoto as fetchGooglePhoto } from '../../services/GooglePhoto';
export default function PlaceCard({activity, index}) {

    const [photoRef, setPhotoRef] = useState(null);

    useEffect(() => {
        const getGooglePhoto = async () => {
            try {
                const result = await fetchGooglePhoto(activity?.activity_name);
                setPhotoRef(result);
            } catch (error) {
                console.error('Error fetching Google photo:', error);
            }
        };

        if (activity?.activity_name) {
            getGooglePhoto();
        }
    }, [activity?.activity_name]);
  return (
    <View key={index}
    style={{
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        borderColor: Colors.LIGHT_GRAY,
    }}
>
    <Image 
        source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
        }}
        style={{
            width: '100%', 
            height: 100,
            borderRadius: 15,
            objectFit: 'cover',
            marginTop: 10,
        }}
    />
    <View
        style={{
            marginTop: 5,
        }}
    >
    <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 17,
        }}
    >{activity?.activity_name}</Text>
    <Text
        style={{
            fontFamily: 'outfit',
            fontSize: 16,
            color: Colors.Gray,
            marginTop: 5,
        }}
    >{activity?.activity_details}</Text>
    <Text
        style={{
            fontFamily: 'outfit',
            fontSize: 16,
            marginTop: 5,
        }}
    >🤑  Ticker Price: 
    <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 16,
        }}
    >{activity?.ticket_pricing}</Text>
    
    </Text>
    <View
        style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 5,
        marginBottom: 5,
    }}
    >
    <View>
    <Text
        style={{
            fontFamily: 'outfit',
            fontSize: 16,
            marginTop: 5,
        }}
    >⏱️  Time: {activity?.activity_time}</Text>
    <Text
        style={{
            fontFamily: 'outfit',
            fontSize: 16,
            marginTop: 5,
        }}
    >⌚  Duration: 
    <Text 
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 16,
        }}
    >
        {activity?.activity_duration} 
    </Text>
    </Text>
    </View>
        <TouchableOpacity
            style={{
                backgroundColor: Colors.Black,
                padding: 5,
                marginTop: 10,
                borderRadius: 10,
            }}
        >
        <Ionicons
            name="navigate"
            size={30}
            color={Colors.White}
        />
        </TouchableOpacity>
    </View>
    </View>
</View>
  )
}