import { Stack } from 'expo-router';

export default function QnaLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name= "qna-screen"/>
    </Stack>
  );
}
