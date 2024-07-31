import { View, Text ,FlatList,TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigation ,useRouter} from 'expo-router'
import {Colors} from './../../constants/Colors'
import { selectBudget } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import {CreateTripContext} from '@/context/CreateTripContext';
export default function SelectBudget() {

    const [selectedBudget,setSelectedBudget] = useState()
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router = useRouter()

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    },[])

    const onSelectedBudget = ()=>{
        if(!selectedBudget){
            Alert.alert('Please select the Budget')
            return;
        }
        setTripData({
            ...tripData,
            budget:selectedBudget
        })
        router.push('/create-trip/review-trip')
    }

    useEffect(()=>{
        console.log(tripData)
    },[tripData])


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
      >Select Budget</Text>
      <View
        style={{
            marginTop: 30,
        }}
      >
        <Text
            style={{
                fontFamily:'outfit-bold',
                fontSize: 20,
                color:Colors.Gray
            }}
        >
            Choose Spending Habits for your trip
        </Text>
        <FlatList 
          data={selectBudget}
          renderItem={({item,index})=>(
            <TouchableOpacity
              onPress={()=>setSelectedBudget(item)}
              style={{
                marginVertical:10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedBudget}/>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={onSelectedBudget}
          style={{
            padding: 20,
            backgroundColor: Colors.Black,
            borderRadius: 99,
            marginTop: 20,
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
          >Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}