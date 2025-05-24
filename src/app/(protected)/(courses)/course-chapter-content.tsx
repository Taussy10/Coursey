import { View, Text, FlatList, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import * as Progress from 'react-native-progress';
import { useState } from 'react';


const CourseChapterContent = () => {
    const {item} = useLocalSearchParams()
    // current page is currently 0
    // based on chaing current page item will render in this screen
    const [currentPage, setCurrentPage] = useState(0)
    // console.log("ehllo :",item);
    // console.log(item.chapter_content[0]?.topic);
    
    const parsedItem = JSON.parse(item)
    // console.log("ChpaterContent :",parsedItem);
    // so this is an array that has some object based on index
    console.log("Each chapter content from course-chapter-content/tsx :",JSON.stringify(parsedItem, null, 4));
console.log("Number of quizzes :",parsedItem.length);

    // created a function for tracking progress 
    // and passed a prams called current page 
    const GetProgress = (currentPage:number) => {
      // now need to calculate: percentage 
      // we are not multiplying by 100 cause we want value between 0 to 1
      const percentage = (currentPage/parsedItem.length) 
      // setCurrentPage(currentPage +0)
      // why are we returing ? go in kinder garden for that to know  
      console.log("Percengate :",percentage);
      
      return percentage
    }
  // const onPushScreen = (currentPage,parsedItem) => {
  //       return (
  //         <View>
      
  //         </View>
  //       )
  //   } 
  const onCompeleteCourse = () => {
    // have to write logic of when user compeletes 
    // the chapter then store it in database then show that user has this chapter 
    // are we gonna use local storegae or remote storae will see later
//  In video he talk about 3:30 to 3:35 (hr:mins)

// Add here when course is compeleted 
router.back()
    // setCurrentPage(parsedItem.length)
    // console.log("Hello")
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
     
     {/* <onPushScreen currentPage={currentPage} parsedItem={parsedItem} /> */}
    

       <Text>{parsedItem[currentPage].topic}</Text>
       <Text>{parsedItem[currentPage].description}</Text>   
     
       {/* <View className=' bg-gray-300 p-4 rounded-xl flex-row items-center gap-2'>
      
       <Text className='  text-black text-base font-roboto-semibold'>{parsedItem[currentPage].codeExample}</Text>
       </View> */}

{
  currentPage< parsedItem.length -1? (
<Button 
title='Next'
// in starting 
// Firstly by default 0th index will be shown then 
// current page = 0 and parsed item = 2 -1 = 1 
// so it will move to 2nd index will show  index == 1  
// chunki we had only 2 index so it will work 
// then: currentScreen = 1 then 1-1 = 0 so 
// it will move to roouter.push  

onPress={() => {if (currentPage< parsedItem.length -1) {
 setCurrentPage(currentPage+1) 
} 
}
}
/>
  ):(
    <Button 
title='Finish'
// in starting 
// Firstly by default 0th index will be shown then 
// current page = 0 and parsed item = 2 -1 = 1 
// so it will move to 2nd index will show  index == 1  
// chunki we had only 2 index so it will work 
// then: currentScreen = 1 then 1-1 = 0 so 
// it will move to roouter.push  

onPress={() => onCompeleteCourse() }
/>
  )
}

    </SafeAreaView>
  )
}

export default CourseChapterContent