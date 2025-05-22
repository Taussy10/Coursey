import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import * as Progress from 'react-native-progress';
import { useState } from 'react';
import { parse } from '@babel/core';

const CourseChapterContent = () => {
    const {item} = useLocalSearchParams()
    // current page is currently 0
    // based on chaing current page item will render in this screen
    const [currentPage, setCurrentPage] = useState(1)
    // console.log("ehllo :",item);
    // console.log(item.chapter_content[0]?.topic);
    
    const parsedItem = JSON.parse(item)
    // console.log("ChpaterContent :",parsedItem);
    console.log("Each chapter content :",JSON.stringify(parsedItem, null, 4));
console.log(parsedItem.length);

    // created a function for tracking progress 
    // and passed a prams called current page 
    const GetProgress = (currentPage:number) => {
      // now need to calculate: percentage 
      // we are not multiplying by 100 cause we want value between 0 to 1
      const percentage = (currentPage/parsedItem.length) 
      // why are we returing ? go in kinder garden for that to know  
      return percentage
    }
  return (
    <SafeAreaView
    className=" flex-1 p-4">
      {/* need to show only if there are more for chapters
      if chpaters if 
      */}

      {/* It's typescript typed that doesn't expect number */}
<Progress.Bar progress={GetProgress(currentPage)} width={330} height={10} />

      <Text>CourseChapterContent</Text>
      {/* based on the current page we are rendering*/}

       <Text>{parsedItem[currentPage].topic}</Text>

       {/*   <FlatList 
        data={parsedItem}
        renderItem={({item}) => {
            return(
                // container
        <View>
            <Text>{item.topic}</Text>
           <Text>{item.description}</Text>
        </View>
            )
        }}
        /> */}
    </SafeAreaView>
  )
}

export default CourseChapterContent