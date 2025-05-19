import { View, Text, Button, Alert } from 'react-native'
import { useAuthContext } from '~/src/contexts/auth-provider';
import { Feather} from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect , useState} from 'react';
import { fetchCourse } from '~/src/appwrite/appwrite';

const Home = () => {
    const { loggedIn, user, loading } = useAuthContext();
    const [courses, SetCourses] = useState(null)
  // console.log("User from home :",user);

  // useEffect is asyn code that runs after the first render
useEffect(() => {
const fetchAllCourse = async() => {
  try {
    const result = await fetchCourse()
    SetCourses(result)
   
   

  } catch (error:any) {
    console.log("Error :",error);
    Alert.alert("Error", error.message) 
  }
}
  fetchAllCourse()
  }, [])

  // on first render it will show undefined then on 2nd render it will show data 
 // so this will give udnefined cause it takes to load so use await 
//  so for that can be do things 

//  1.optional chaining: on first render it is undefined then ok 
// but on 2nd render execute the code 
const c = courses?.documents[0]
console.log("Courser :",c);








 
// if (Array.isArray(courses?.documents)) {
//  courses.documents.map((element) => {
//     console.log("ELEM:", element);
//   });
// }

 
// if (courses?.documents[0]?.chapters === typeof Object) {
// console.log("Typof :", courses?.documents[0]?.chapters);
// }else{
//  Alert.alert("h")
  
// }
// if (Array.isArray(courses?.documents[0]?.chapters)) {
//  courses?.documents[0]?.chapters.map((element) => {
//     console.log("ELEM:", element);
//   });
// }

 


  // console.log("COURSESsfds :", courses?.documents[0].forEach(element => {
  //   console.log("ELEM :",element);
    
  // }))

 
  // this replacer is for ignoring things: null means don't ignore anything  
  // this space is just spacing from left side 

  // console.log("10",JSON.stringify(courses, null, 4))

  // console.log("COURSES :",JSON.stringify(courses,null,2));
  // why it's supportiing dot notation in objects  when JSON.stringfy is a string ? 
  // cause object's keys and values  under the hood are strings

  
  // BUT you can't use array methods on it will 
  // give error cause error method only work on array 
  // bw why I'll use array method on it cause this chapter is contains 
  // value of array so it can work but not in case of string  
  // const h = JSON.stringify(courses?.documents[0].chapters.forEach((element) => {
  //   console.log("ELEM :",typeof element);
  //   return element
  // }) );
  // console.log(typeof h);
  
  // console.log("COURSES_CHAPTERS :",courses?.chapters.forEach(element => {
  //   return console.log("ELEM :",element);
    
  // }));
  // console.log("COURSES_CHAPTERS :",JSON.stringify(courses?.chapters.forEach(element => {
  //   console.log("ELME",element);
    
  // })))
  // so to the the value you have to do this 
//  console.log("COURSES_CHAPTERS :",courses?.documents[0].chapters)
  return (
    <View>

      <View className=' gap-4 mb-6 '>
      <Text>Home</Text>
      <Button 
      title= 'Create a course'
      onPress={() => router.push('/create-course')}
      />
      <Button 
      title= 'Explore existing courses'
      />
      </View>

    <Feather name="settings" size={24} color="black" />
    </View>
  )
}

export default Home