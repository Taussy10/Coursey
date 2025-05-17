import { View, Text } from 'react-native'
import {useEffect} from 'react'
import { useAuthContext } from '~/src/contexts/auth-provider';
import { addUser } from '~/src/appwrite/appwrite';

const Home = () => {
    const { loggedIn, user, loading } = useAuthContext();
    
    useEffect(() => {
      addUserDB()
    }, [user, loading])
    
    const addUserDB = async() => {
      try {
      await addUser(user.$id, user.email, user?.name )
      
    } catch (error) {
      console.log("Error :",error);
      
      
    }
  }
  
  console.log("User from home :",user);
  
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home