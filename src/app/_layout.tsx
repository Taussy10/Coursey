import '~/global.css';

import {
Inter_400Regular,
Inter_600SemiBold,
Inter_700Bold,
useFonts,
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import {AuthProvider} from '../contexts/auth-provider';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded, error] = useFonts({
     Inter_400Regular,
     Inter_600SemiBold,
     Inter_700Bold,
    });
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
    
    if (!loaded && !error) {
      return null;
    }
    {
      /* Why AuthProvider below GestureHandlerRootView ? 
      // AuthProvider is sharing data between screens  
      // but gestureHandler is use for whole app it needs to 
      know what kinda gesture are used by user on app 
      */
    }
 
  return (

    <GestureHandlerRootView>
      {/* <AuthProvider> */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      {/* </AuthProvider> */}
    </GestureHandlerRootView>
  );
}
