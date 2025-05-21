import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'

// Each course practice list will be here
// Also it will dynamic so each 
// so it will work for Qna , Quizzes and Flashcards   

const PracticeList = () => {
  const {practiceData } = useLocalSearchParams()
// console.log("Number :", typeof JSON.parse(number));

  // you passed data in json strinfgy so we have to parsed 
  // Actually this JSON.parse convert the strinifgy to actual value 
  // for example we conveted array in strinfgy then this json.parse 
  // will convert it bact to actual data type that is array

  const parsedPracticeData = JSON.parse(practiceData)
  
  
 
  // 011
  return (
    <View className='bg-green-500 flex-1 flex-row justify-center items-center'>
      {/* <Text>{title}</Text> */}


      {/* what does Flatlist do: whatever the indexs an array has it will iterate on each
      then it will give that data 
      // for example 
      // 1. [{}, {}],
      // 2.["Tausif", 3]

      // by Flatlist will give: 
      // 1. {} then {}
      // 2. "Tausif" then 3
       */}

      <FlatList 
      data={parsedPracticeData}
      renderItem={({item}) => {
        // console.log("item from practice-list :",JSON.stringify(item, null, 3));
        
        return(
          // you need to write here course title
          <View>
            <Text>{item?.course_name}</Text>
        </View>
        )
      }}
      />
    </View>
  )
}

export default PracticeList;