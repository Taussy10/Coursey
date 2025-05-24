import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

const QnaScreen = () => {
  const { courseData } = useLocalSearchParams();
  const [currentQna, setCurrentQna] = useState(0);
  // console.log("all the data",data);
  // so we got each courseData
  const parsedPracticeData = JSON.parse(courseData);
  const qna = parsedPracticeData?.chaptersQna.length;
  console.log('QNA :', qna);

  const onCompeletingQna = () => {
    setCurrentQna(0 + 1);
  };

  // console.log("CourseData from qna-screen :",JSON.stringify(parsedPracticeData,null, 4));
  return (
    <SafeAreaView>
      <Text>QnaScreen</Text>
      <Text>{parsedPracticeData?.chaptersQna[currentQna]?.question}</Text>
      <Text>{parsedPracticeData?.chaptersQna[currentQna]?.answer}</Text>

      <Button
        title="NEXT"
        onPress={() => {
          if (parsedPracticeData?.flashcards?.length < currentQna - 1) {
            console.log('hello');
          }
          onCompeletingQna();
        }}
      />
    </SafeAreaView>
  );
};

export default QnaScreen;
