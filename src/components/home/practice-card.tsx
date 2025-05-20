import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const PracticeCard = () => {
  return (
    //  Practice
    //  container for pratice section
    <View>
      {/* Cards */}
      {/* sometimes we get problems */}
      <TouchableOpacity
      style={{width: 100}}
      className=" h-48  rounded-xl bg-green-400">
        <Text>Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PracticeCard;
