import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

interface propsType {
title: string;
practiceData: object;

}
const PracticeCard = ({title,practiceData,allData, screenName}:propsType) => {
  // console.log("datdata);
  // console.log("practiceData from practice-card.tsx :", JSON.stringify(practiceData, null, 2));
  
  return (
    //  Practice
    //  container for pratice section
      // {/* Cards */}
      // {/* sometimes we get problems */}
      <TouchableOpacity
      onPress={() =>router.push({
        pathname: '/(protected)/practice-list',
       params: {
        // for some reason you can't pass data directly ? Why ? you have to pass it 
        // as string then later uou want to use convert in ojbect
        allData:JSON.stringify(allData),
        practiceData:JSON.stringify(practiceData),
        screenName:screenName
       },
       
      })}
      // onPress={() =>console.log("Ctasif",data)
      // }
      // don't know why sometimes classname doesn't work that's why using stlye
      style={{width: 100, height: 200, backgroundColor:"lightgreen", borderRadius: 10, }}
      // className=" h-48  rounded-xl bg-green-400"
      >
        <Text>{title}</Text>
      </TouchableOpacity>
   
  );
};

export default PracticeCard;
