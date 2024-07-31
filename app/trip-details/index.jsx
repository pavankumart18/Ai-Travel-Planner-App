import { View, Text, Image,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/Colors';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import moment from 'moment';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';
export default function TripDetails() {
    const navigation = useNavigation();
    const {trip}  = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState([]);

    const formatData = (data) => {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error('Invalid JSON format:', error);
            return {};
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });

        try {
            setTripDetails(JSON.parse(trip));
        } catch (error) {
            console.error('Invalid JSON format:', error);
        }
    }, [trip]);

    return (
        <ScrollView>
                <Image 
                    source={{
                        uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                            + formatData(tripDetails?.tripData)?.locationInfo?.photoRef +
                            '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
                    }}
                    style={{
                        width: '100%', 
                        height: 330,
                    }}
                />
                <View
                    style={{
                        padding: 25,
                        backgroundColor: Colors.White,
                        height:'100%',
                        marginTop: -30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'outfit-bold',
                            fontSize: 20,
                        }}
                    >{tripDetails?.tripPlan?.trip?.destination}</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'outfit',
                                fontSize: 18,
                                color: Colors.Gray,
                                marginTop: 5,
                            }}
                        >{moment(formatData(tripDetails?.tripData)?.startDate).format('DD MMM YYYY')}</Text>
                        <Text
                            style={{
                                fontFamily: 'outfit',
                                fontSize: 18,
                                color: Colors.Gray,
                                marginTop: 5,
                            }}
                        >
                        - {moment(formatData(tripDetails?.tripData)?.endDate).format('DD MMM YYYY')}
                        </Text>

                    </View>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 16,
                            marginTop: 5,
                            color:Colors.Gray
                        }}
                    >🚌   {formatData(tripDetails?.tripData)?.traveler?.title}</Text>

                        {/* Flight Info */}
                            <FlightInfo flightInfo={tripDetails?.tripPlan?.trip?.flight}/>

                        {/* Hotel Info */}

                            <HotelList hotelList={tripDetails?.tripPlan?.trip?.hotel}/>

                        {/* Trip Day Plan */}

                            <PlannedTrip details={tripDetails?.tripPlan?.trip?.daily_plan}/>
                </View>

                
        </ScrollView>
    );
}
