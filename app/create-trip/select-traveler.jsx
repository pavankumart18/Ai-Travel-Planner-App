import { View, Text ,FlatList} from 'react-native'
import React, { useEffect,useState ,useContext} from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { SelectTravelerList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { TouchableOpacity } from 'react-native'
import { CreateTripContext } from '@/context/CreateTripContext'
import { useRouter } from 'expo-router'
export default function SelectTraveler() {
    const [selectedTravelers, setSelectedTravelers] = useState('')
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }
    , [])
    useEffect(()=>{
        setTripData({
            ...tripData,
            traveler: selectedTravelers
        })
    },[selectedTravelers])
    useEffect(() => {
        console.log(tripData)
    }, [tripData])
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
          fontFamily:'outfit-bold',
          marginTop:20,
        }}
      >Who's Traveling</Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily:'outfit-bold',
          }}
        >Choose Your Travelers</Text>
        <FlatList 
          data={SelectTravelerList}
          renderItem={({item,index})=>(
            <TouchableOpacity
              onPress={()=>setSelectedTravelers(item)}
              style={{
                marginVertical:10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTravelers}/>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={()=>router.push('/create-trip/select-dates')}
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