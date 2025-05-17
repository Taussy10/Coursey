import { Alert, Button, StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { addUser, config, createUser, getCurrentUser } from '../appwrite/appwrite';
// import { allImages, exploreData } from '../data/data';
import { useAuthContext } from '@/contexts/auth-provider';
// import images from '~/constants/images';
import { account } from '../appwrite/appwrite';
const Index = () => {
  const { loggedIn, user, loading } = useAuthContext();

if (loading) {
  return(
    <View className=' flex-1 items-center justify-center'>
    <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  )
}
  if (loggedIn && user) {
    return <Redirect href="/home" />;
  }

  // This fun will login the user
  const loginUser = async () => {
    try {
      // will call the createUser function
      // and store the return value in user variable
      // dude dhyaan se you can't write 
      // variable as user here cause we want to user from useAuthContext 
      // const user = createUser()
      // I want that it should also execute 
      // addUser function if addUser function is 
      // failed then whole try should faile basically not authtenticate 
     const createdUser = await createUser();
     if (createdUser) {
      router.replace("/home")
     }
     
    } catch (error) {
      // using here log cause I don't want on
      // user-end get a model for showing error information
      console.log('Error in loginUser fun from index.tsx :', error);

      Alert.alert('Auth Error', 'Failed to Authorize');

      throw new Error('Failed to Authorize');
    }
  };
console.log("config :",config);

  return (
    <View >
      <StatusBar backgroundColor="white" />

      {/* Container for animations */}
      <Image source={require("~/assets/reference-images/01_onboarding.png")} className=" mb-2  h-[480px] w-full" resizeMode="cover" />

      {/* App Info and Login container*/}
      <View 
      className="  h-56 items-center   p-5 "
       elevation={1}>
        <View>
          <Text className="   text-custom-green  mb-2 font-pBold  text-2xl  text-green-800">
            Cookmate AI
          </Text>
        </View>

        <View className=" mb-8">
          {/* Ditch takeouts and create delicious meals at home, Cookmate AI will guide you in every step */}
          <Text className="    font-pSemibold  text-base text-gray-600  ">
            Generate delicious recipes in seconds
          </Text>
          <Text className="  text-center font-pSemibold text-[20px] text-gray-600">
            with the power of AI
          </Text>
        </View>

        <TouchableOpacity
          onPress={loginUser}
          activeOpacity={0.7}
          className=" w-full flex-row 
          items-center justify-center 
          gap-2 rounded-2xl bg-green-700 p-3
          
          ">
          <AntDesign name="google" size={24} color="white" />
          <Text className="    font-pSemibold text-[16px]   text-white">Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
// Now it's time to manage user so that user can be accessible all over the app
