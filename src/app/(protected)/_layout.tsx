import { Stack } from 'expo-router';

export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* hard to belive but have to 
      do this will move to initial screen which is home  */}
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="practice-list"/>
      <Stack.Screen name="course-details"/>
    </Stack>
  );
}
