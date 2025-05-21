import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

// only two courses we are getting cause according to userId
const CouresList = ({ data }: { data: string }) => {
            //   console.log('CouresList :',JSON.stringify(data, null, 3));

  return (
    <View>
      <Text>CouresList</Text>
      <FlatList
      horizontal
        data={data}
        renderItem={({item, index}) => {
        //   console.log('CouresList :',JSON.stringify(item, null, 3));
        // how can you implemnet chapter lenght for each course and let 
        // me tell each courese will have diffrent length
          console.log("Chapters, :" ,item?.chapters?.length);
          
          return (
            <TouchableOpacity
            // onPress={() => router.push('/course-details')}
              onPress={() => router.push({
                pathname:'/course-details',
                // you have to pass it as JSONify string  
                // due you have to pass params in object 
                // and that should has a key
                params: {item:JSON.stringify(item)},
                // params: {},
              })}
              style={{
                width: 100,
                height: 200,
                backgroundColor: 'lightgreen',
                borderRadius: 10,
                marginRight: 22,
                marginBottom: 22,
              }}>
              <Text>{item?.chapters?.length}</Text>
              {/* chapter length */}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CouresList;
