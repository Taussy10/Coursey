import { View, Text, Button } from 'react-native'
import {useEffect} from 'react'
import { useAuthContext } from '~/src/contexts/auth-provider';
import { Feather} from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRouter } from 'expo-router';
const Home = () => {
    const { loggedIn, user, loading } = useAuthContext();
  console.log("User from home :",user);
console.log(() => router.push('/create-course'));

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