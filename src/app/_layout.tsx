import '~/global.css';

import {
Roboto_400Regular,
Roboto_500Medium,
Roboto_700Bold,
useFonts,
} from '@expo-google-fonts/roboto';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {AuthProvider} from '../contexts/auth-provider';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded, error] = useFonts({
Roboto_400Regular,
Roboto_500Medium,
Roboto_700Bold,
    });

  
    // Whenever font will be loaded/error 
    // then useEffect will execute 
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
    
    if (!loaded && !error) {
      return null;
    }

    
 
  return (

    <GestureHandlerRootView>
      <AuthProvider>
        {/* I don't need currently this will take when I need that  */}
      {/* you don't need to use safe area view everywhere just 
      wrap whole app with safe area provider then by safea area view  */}
      {/* provider cause we want to show infomration all over the app  */}
      {/* <SafeAreaProvider>
        <SafeAreaView className=' flex-1 px-4'> */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
        {/* </SafeAreaView>
      </SafeAreaProvider> */}
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
