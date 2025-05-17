import { View, Text } from 'react-native'
import {useEffect} from 'react'
import { useAuthContext } from '~/src/contexts/auth-provider';

const Home = () => {
    const { loggedIn, user, loading } = useAuthContext();
  console.log("User from home :",user);
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home