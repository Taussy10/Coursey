import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
const CourseDetails = () => {
  // you have destructure when there are two many elements
  //  and you don't want to get them dot method 
  const { item } = useLocalSearchParams();
  
  // console.log(JSON.stringify(item, null, 3));
  const parsedCourseData = JSON.parse(item);
  console.log('CourseData from course-details.tsx', JSON.stringify(parsedCourseData, null, 4));

  return (
    <SafeAreaView className=" flex-1 p-4">
      <Text>CourseDetails Screen</Text>
      {/* <Text>{parsedCourseData?.course_name}</Text> */}
      {/* <Text
      className=' font-roboto-semibold'
      >{parsedCourseData?.description}</Text> */}

      {/* For course chapters */}
      <FlatList
        data={parsedCourseData.chapters}
        renderItem={({ item, index }) => {
          // console.log('item from courseDetails screen', item?.chapters?.length);

          return (
            // container
            <View>
              <TouchableOpacity
                className="mb-4  flex-row items-center justify-between rounded-2xl 
             border p-3">
                <View className=" flex-row gap-2">
                  <Text>{index + 1}.</Text>
                  <Text>{item?.chapter_name}</Text>
                </View>
                <Entypo name="controller-play" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CourseDetails;
