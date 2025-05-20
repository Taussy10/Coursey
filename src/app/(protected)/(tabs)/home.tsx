import { View, Text, Button, Alert, FlatList } from 'react-native';
import { useAuthContext } from '~/src/contexts/auth-provider';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetchCourse } from '~/src/appwrite/appwrite';
import PracticeCard from '~/src/components/home/practice-card';

const Home = () => {
  const { loggedIn, user, loading } = useAuthContext();
  const [courses, SetCourses] = useState(null);
  // console.log("User from home :",user);

  // useEffect is asyn code that runs after the first render
  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const result = await fetchCourse();
        SetCourses(result);
      } catch (error: any) {
        console.log('Error :', error);
        Alert.alert('Error', error.message);
      }
    };
    fetchAllCourse();
  }, []);
  console.log('Couress :', courses?.documents);

  return (
    <View>
      <FlatList
        data={courses?.documents}
        renderItem={({ item }) => {
          return (
            <View>
              <View className=" mb-6 gap-4 ">
                <Text>Home</Text>
                <Button title="Create a course" onPress={() => router.push('/create-course')} />
                <Button title="Explore existing courses" />

                <Feather name="settings" size={24} color="black" />
                <Text>Practice</Text>
                <View className=" flex-row items-center justify-center gap-4 ">
                  <PracticeCard quizes={item?.chaptersQuizzes} />
                  <PracticeCard flashcards={item?.flashcards} />
                  <PracticeCard qna={item?.chaptersQna} />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
