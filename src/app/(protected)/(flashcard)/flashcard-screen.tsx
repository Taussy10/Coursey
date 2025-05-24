import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

const FlashcardScreen = () => {
  const { courseData } = useLocalSearchParams();
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  // console.log("all the data",data);
  // so we got each courseData
  const parsedPracticeData = JSON.parse(courseData);
  const flashcard = parsedPracticeData?.flashcards;
  console.log('falshCard :', flashcard);

  const onCompeletingFlashcards = () => {
    setCurrentFlashcard(0 + 1);
  };
  console.log('helo :', parsedPracticeData?.flashcards[0]?.front);

  // console.log("CourseData from flashcard-screen :",JSON.stringify(parsedPracticeData,null, 4));
  //  parsedPracticeData?.flashcards[0]?.front === null||undefined ?console.log("hello"):console.log("hnothing");
  console.log('undefined :', parsedPracticeData?.flashcards.length);

  return (
    <SafeAreaView>
      <Text>QnaScreen</Text>
      {
        // parsedPracticeData?.flashcards[0]?.front !== null||undefined ? (
        parsedPracticeData?.flashcards?.length > 0 ? (
          <View>
            <Text>{parsedPracticeData?.flashcards[currentFlashcard]?.front}</Text>
            <Text>{parsedPracticeData?.flashcards[currentFlashcard]?.back}</Text>
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
          if (parsedPracticeData?.flashcards.length < currentFlashcard - 1) {
            console.log('hello');
          }
          onCompeletingFlashcards();
        }}
      />
    </SafeAreaView>
  );
};

export default FlashcardScreen;
