import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon} from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
    id,imgUrl,title,rating,genre,address,short_description,dishes,long,lat
}) => {
 const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Restaurant',{
        id,imgUrl,title,rating,genre,address,short_description,dishes,long,lat
      })
    }}
    className='bg-white mr-3 shadow'>
      <Image
      source={{
        uri: urlFor(imgUrl).url(),
      }}
        className='h-36 w-60 rounded-sm'
        />
        <View className='px-2 pb-3'>
            <Text className='font-bold text-ld pt-2'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={20}/>
                <Text className='text-xm text-gray-500'>
                    <Text className='text-green-500'>{rating}</Text> . {genre}
                </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.4} size={22}/>
                <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
