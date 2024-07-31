import { View, Text ,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import PlaceCard from './PlaceCard';
export default function PlannedTrip({ details }) {
    return (
        <View
            style={{
                marginTop: 20,
            }}
        >
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                }}
            >
                🏕️ Plan Details
            </Text>

            {details?.map((dayDetail, index) => (
                <View key={index}>
                    <Text
                        style={{
                            fontFamily: 'outfit-bold',
                            fontSize: 20,
                            marginTop: 10,
                        }}
                    >{dayDetail?.day}</Text>
                    {dayDetail?.activities.map((activity, index) => (
                        <PlaceCard activity={activity} index={index} key={index} />
                    ))}
                </View>
            ))}
        </View>
    );
}
