import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const PracticeList = () => {
  const { allData, screenName, practiceData } = useLocalSearchParams();

  // you passed data in json strinfgy so we have to parsed
  // Actually this JSON.parse convert the strinifgy to actual value
  // for example we conveted array in strinfgy then this json.parse
  // will convert it bact to actual data type that is array
  // You can try it by passing number as stringy then prase it
  // console.log('ScreenName :', screenName);

  const parsedPracticeData = JSON.parse(allData);
  // console.log("Phe ::",parsedPracticeData);

  // 011
  return (
    <SafeAreaView className="flex-1">
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
        numColumns={2}
        renderItem={({ item }) => {
          // console.log("item from practice-list :",JSON.stringify(item, null, 3));
          return (
            // you need to write here course title
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: screenName,
                  params: {
                    data: JSON.stringify(allData),
                    practiceData: JSON.stringify(practiceData),
                    courseData: JSON.stringify(item),
                  },
                })
              }
              style={{
                width: 100,
                height: 200,
                backgroundColor: 'lightgreen',
                borderRadius: 10,
                marginRight: 22,
                marginBottom: 22,
              }}>
              <Text>{item?.course_name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PracticeList;
