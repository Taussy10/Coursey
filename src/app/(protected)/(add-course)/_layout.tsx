import { Stack } from 'expo-router';

export default function AddCourseLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* hard to belive but have to 
      do this will move to initial screen which is home  */}
      <Stack.Screen name= "create-course"/>
    </Stack>
  );
}
