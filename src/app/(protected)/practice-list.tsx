import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'

// Each course practice list will be here
// Also it will dynamic so each 
// so it will work for Qna , Quizzes and Flashcards   

const PracticeList = () => {
  const {data, title,courseTitle} = useLocalSearchParams()
  // console.log("Params :",JSON.stringify(data, null, 3) );
  const categoryData = JSON.parse(data)
  // console.log("courseTitle",courseTitle[0]);
  
  // console.log("Params :",JSON.parse(data));
  
  //  data?.map((item)=> (
  //   console.log("dat",item)
  //  ))
  // console.log("HEllo :",courseTitle[0]);
  
  // console.log("Tile :",JSON.stringify(courseTitle[0]?.course_name, null, 3));
  
  return (
    <View className='bg-green-500 flex-1 flex-row justify-center items-center'>
      {/* <Text>{title}</Text> */}

      {/* <Text>{courseTitle}</Text> */}
      
      <FlatList 
      data={courseTitle}
      renderItem={({item}) => {
        // console.log("Item of courseTitle from practice-Flashlist :",item);
        
        return(
          // you need to write here course title
          <View>
            {/* <Text>item</Text> */}
      </View>
        )
      }}
      />
    </View>
  )
}

export default PracticeList;