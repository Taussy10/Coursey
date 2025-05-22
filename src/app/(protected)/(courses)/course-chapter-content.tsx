import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'


const CourseChapterContent = () => {
    const {item} = useLocalSearchParams()
    // console.log("ehllo :",item);
    // console.log(item.chapter_content[0]?.topic);
    
    const parsedItem = JSON.parse(item)
    // console.log("topic :",parsedItem.chapter_content[0].topic);
    // console.log("topic :",JSON.stringify(parsedItem, null, 4));
    
  return (
    <SafeAreaView
    className=" flex-1 p-4">
      <Text>CourseChapterContent</Text>
        <FlatList 
        data={parsedItem}
        renderItem={({item}) => {
            return(
                // container
        <View>
            <Text>{item.topic}</Text>
            {/* <Text>{item.description}</Text> */}
        </View>
            )
        }}
        />
    </SafeAreaView>
  )
}

export default CourseChapterContent