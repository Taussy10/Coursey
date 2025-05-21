import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

interface propsType {
title: string;
data: object;
courseTitle: string;
}
const PracticeCard = ({title, data,courseTitle}:propsType) => {
  // console.log("datdata);
  
  return (
    //  Practice
    //  container for pratice section
    <View className=' bg-green-500 flex-1    '>
      {/* Cards */}
      {/* sometimes we get problems */}
      <TouchableOpacity
      onPress={() =>router.push({
        pathname: '/(protected)/practice-flashlist',
       params: {title,
        // for some reason you can't pass data directly ? Why ? you have to pass it 
        // as string then later uou want to use convert in ojbect
        data:JSON.stringify(data),
       courseTitle
       },
       
      })}
      // onPress={() =>console.log("Ctasif",data)
      // }
      style={{width: 100}}
      className=" h-48  rounded-xl bg-green-400">
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PracticeCard;
