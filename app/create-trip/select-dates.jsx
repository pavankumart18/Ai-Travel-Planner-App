import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { Colors } from '@/constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {CreateTripContext} from '@/context/CreateTripContext';

export default function SelectDates() {
  const currentDate = new Date();
  const router = useRouter();

  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const {tripData,setTripData} = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === 'START_DATE') {
      setStartDate(moment(date));
    } else{
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      Alert.alert('Please select start and end date');
      return;
    }
    const totalDays = moment(endDate.diff(startDate, 'days'));
   // Assuming you have a setTripData method in your context
    setTripData({
      ...tripData,
      startDate: moment(startDate),
      endDate:moment(endDate),
      totalDays: totalDays + 1,
    });
    router.push('/create-trip/select-budget');
  };

  useEffect(()=>{
    console.log(tripData)
  },[tripData])

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        height: '100%',
        backgroundColor: Colors.White,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: 'outfit-bold',
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={currentDate}
          maxRangeDuration={5}
          selectedRangeStyle={{ backgroundColor: Colors.Black }}
          selectedDayTextStyle={{ color: Colors.White }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          padding: 20,
          backgroundColor: Colors.Black,
          borderRadius: 99,
          marginTop: 30,
          paddingHorizontal: 50,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: Colors.White,
            fontSize: 18,
            fontFamily: 'outfit-medium',
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
