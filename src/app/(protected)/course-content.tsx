import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

const CourseContent = () => {
    const {item} = useLocalSearchParams()
    console.log("ehllo :",item);
    // console.log(item.chapter_content[0]?.topic);
    
    const parsedItem = JSON.parse(item)
    console.log("topic :",parsedItem.chapter_content[0].topic);
    
  return (
    <SafeAreaView
    className=" flex-1 p-4"
    >
      <Text>CourseContent</Text>
    </SafeAreaView>
  )
}

export default CourseContent