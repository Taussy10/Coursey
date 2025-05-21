import { Stack } from 'expo-router';

export default function FlashcardLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name= "flashcard-screen"/>
    </Stack>
  );
}
