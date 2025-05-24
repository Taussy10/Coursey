import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

const QuizScreen = () => {
  const { courseData } = useLocalSearchParams();
  const [currentquiz, setCurrentQuiz] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState();
  // console.log("all the data",data);
  // so we got each courseData
  const parsedPracticeData = JSON.parse(courseData);
  const quizes = parsedPracticeData?.chaptersQuizzes[0];
  // console.log('Quizes :', quizes);

  const onCompeletingQuiz = () => {
    setCurrentQuiz((prev) => prev + 1);
    setSelectedQuiz(undefined); // ✅ Yeh important hai
  };

  console.log('selectedQuiz :', selectedQuiz);

  // console.log('QuizData :', parsedPracticeData?.chaptersQuizzes[0]);

  // console.log("CourseData from flashcard-screen :",JSON.stringify(parsedPracticeData,null, 4));

  return (
    <SafeAreaView className=" flex-1 p-4">
      <Text>QnaScreen</Text>
      {
        // parsedPracticeData?.flashcards[0]?.front !== null||undefined ? (
        parsedPracticeData?.chaptersQuizzes?.length > 0 ? (
          <View>
            <Text>{parsedPracticeData?.chaptersQuizzes[currentquiz]?.question}</Text>
            <Text>{parsedPracticeData?.chaptersQuizzes[currentquiz]?.answer}</Text>
            {parsedPracticeData?.chaptersQuizzes[currentquiz]?.option.map((item, index) => {
              return (
                // Just a container
                <View
                  //  className=' bg-green-500'
                  key={index}>
                  <TouchableOpacity
                    // when you press on item contains iti's value by onpress you can
                    onPress={
                      () => setSelectedQuiz(item)
                      // console.log("currentItem :",item)
                    }
                    // className={`m-2 rounded-xl border p-3 ${selectedQuiz === item ? 'bg-green-500' : 'bg-white'}`}
                    // The issue was I was just checking is slectedItem is truthy? yeah cause intially
                    //  is undefined whic is falsey value but when you select it stores let's def then
                    // it's truthy so it will bg-green
                    // Now it will bg-green only when selecteItem(selected by user by tapping) === storedItem(stored in usestate of Setselected) is truthy value
                    className={`m-2 rounded-xl border p-3 ${selectedQuiz === item ? 'bg-green-500' : 'bg-white'}`}>
                    <Text className="font-roboto-semibold text-base">{item}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : (
          <Text className=" text-xl">There are no flashcards</Text>
        )
      }

      {/* if there are enough cards then show otherwise don't move */}

      {/* 
      {
    
      } */}
      <Button
        title="NEXT"
        onPress={() => {
          if (parsedPracticeData?.chaptersQuizzes.length < currentquiz - 1) {
            console.log('hello');
          }
          onCompeletingQuiz();
        }}
      />
    </SafeAreaView>
  );
};

export default QuizScreen;
