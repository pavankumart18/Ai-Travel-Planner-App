import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { GetGooglePhoto as fetchGooglePhoto } from '../../services/GooglePhoto';

export default function HotelCard({ item }) {
    const [photoRef, setPhotoRef] = useState(null);

    useEffect(() => {
        const getGooglePhoto = async () => {
            try {
                const result = await fetchGooglePhoto(item?.hotel_name);
                setPhotoRef(result);
            } catch (error) {
                console.error('Error fetching Google photo:', error);
            }
        };

        if (item?.hotel_name) {
            getGooglePhoto();
        }
    }, [item?.hotel_name]);

    return (
        <View
            style={{
                marginRight: 20,
                width: 180,
                backgroundColor: Colors.LIGHT_GRAY,
                borderRadius: 15,
            }}
        >
            <Image
                source={{
                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
                }}
                style={{
                    width: 180,
                    height: 120,
                    borderRadius: 15,
                    objectFit: 'cover',
                }}
            />
            <View
                style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 17,
                    marginTop: 5,
                }}
            >
                <Text>{item?.hotel_name}</Text>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        marginTop: 5,
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 16,
                            color: Colors.Gray,
                            marginTop: 3,
                        }}
                    >
                        ⭐ {item?.rating}
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 16,
                            color: Colors.Gray,
                            marginTop: 3,
                        }}
                    >
                        💰 {item?.price}
                    </Text>
                </View>
            </View>
        </View>
    );
}
