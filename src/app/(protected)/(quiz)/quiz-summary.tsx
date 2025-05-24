import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

const QuizSummary = () => {
  const { quizResults } = useLocalSearchParams();
  const parsedQuizResults = JSON.parse(quizResults);
  console.log('Quiz Results from quiz-summary.tsx ', parsedQuizResults);

  return (
    <SafeAreaView className=" flex-1 p-4">
      <Text>QuizSummary</Text>
      {parsedQuizResults.map((item, index) => {
        console.log('item :', item);

        return (
          // this is container
          <View key={index}>
            <View
              className={` mb-4  rounded-xl p-6   ${item.correctAnswer !== item.userAnswer ? 'bg-red-500' : 'bg-green-500'}`}>
              <Text>Question: {item.question}</Text>
              <Text>Your Answer: {item.userAnswer}</Text>
              <Text>Correct Answer: {item.correctAnswer}</Text>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default QuizSummary;
