import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

// All screens realted to courses-list(from home screen) 
const CouresLayout = () => {
  return (
    <Stack>
        {/* Details of course that what are the chpaters it consist ? */}
        <Stack.Screen name='course-details' />
        {/* content of each course chapter?
        so why not rename to course-chapter-content from course-content 
        */}
        <Stack.Screen name='course-chapter-content' />
    </Stack>
  )
}

export default CouresLayout