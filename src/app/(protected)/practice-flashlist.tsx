import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'

const PracticeFlashlist = () => {
  const {data, title,courseTitle} = useLocalSearchParams()
  // console.log("Params :",JSON.stringify(data, null, 3) );
  const categoryData = JSON.parse(data)
  console.log("sdf",courseTitle);
  
  // console.log("Params :",JSON.parse(data));
  
  //  data?.map((item)=> (
  //   console.log("dat",item)
  //  ))
  return (
    <View className='bg-green-500 flex-1 flex-row justify-center items-center'>
      <Text>{title}</Text>
      <Text>{courseTitle}</Text>
      
      <FlatList 
      data={categoryData}
      renderItem={({item}) => {
        console.log("data :",item);
        
        return(
          // you need to write here course title
          <View>
      </View>
        )
      }}
      />
    </View>
  )
}

export default PracticeFlashlist