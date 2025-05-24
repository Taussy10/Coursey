import { View, Text, Button, Alert, FlatList, Image } from 'react-native';
import { useAuthContext } from '~/src/contexts/auth-provider';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetchCourse } from '~/src/appwrite/appwrite';
import PracticeCard from '~/src/components/home/practice-card';
import { ScrollView } from 'react-native-gesture-handler';
import CouresList from '~/src/components/home/courses-list';

const Home = () => {
  const { loggedIn, user, loading } = useAuthContext();
  const [courses, SetCourses] = useState(null);
  // console.log("User from home :",user);

  // useEffect is asyn code that runs after the first render
  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const result = await fetchCourse(user?.$id);
        SetCourses(result);
      } catch (error: any) {
        console.log('Error :', error);
        Alert.alert('Error', error.message);
      }
    };
    fetchAllCourse();
  }, []);
  // We got the data now what to with data ?
  // in component of practice-card
  // I want to show ? nothing from that
  // just Text of Practice name: for example Quiz
  // But if user click any practice card then it should
  // practice-list screen where he will se component of each course
  // that will have course name
  // so we have to pass two things
  // 2. Data of all course: so that we extract course_name , Quizzes, QNA
  // 3. Title of practice: so that it can be dynamic component
  // console.log('All Coures :', JSON.stringify(courses, null, 3));
  // console.log("Chapters, :" ,courses?.documents[0]);

  return (
    <ScrollView
    // refreshControl={}
    >
      {/* What is flatlist ? whatever the array has 
      index will iterate and show so here array is course that has 2 course 
      so , the data will iterate tw times so that whatever in flatist is will written two times */}

      {/* Container for buttons */}
      <View className=" mb-6 gap-4 ">
        <Text>Home</Text>
        <Button title="Create a course" onPress={() => router.push('/create-course')} />
        <Button title="Explore existing courses" />
        <Feather name="settings" size={24} color="black" />
      </View>

      {/*Container for practice section */}
      <View>
        <Text>Practice</Text>
        <View className=" flex-row items-center justify-center gap-4 ">
          <PracticeCard
            //  courses?.documents[0].chaptersQna appan
            // yu naa send kar sakte cause by that only 0th course will be sent
            // so we have to send each course data
            allData={courses?.documents}
            practiceData={courses?.documents[0].chaptersQna}
            screenName={'/qna-screen'}
            title={'QnA'}
          />
          <PracticeCard
            practiceData={courses?.documents}
            title={'Quizzes'}
            screenName={'/quiz-screen'}
            allData={courses?.documents}
          />
           <PracticeCard
            practiceData={courses?.documents}
          title={'Flashcard'}
          screenName={'/flashcard-screen'}
            allData={courses?.documents}
          />
         
          
          
        </View>
      </View>

      {/* For courses List */}
      <CouresList data={courses?.documents} />
    </ScrollView>
  );
};

export default Home;
