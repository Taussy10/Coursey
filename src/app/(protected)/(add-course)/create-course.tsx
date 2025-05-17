import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
const CreateCourse = () => {

  // Generating topics 
  const onGenerateTopic = () => {

  }
  return (
    <View>
      <Text>CreateCourse</Text>
      <TextInput 
      placeholder={"Write your text"}
      // value= 'Write your text'

      // This textinput is for online one line
      // numberOfLines={3} 
      multiline={true}
                      numberOfLines={4}
     // SOMETIMES ClassName height width props 
     // have some problem in TextInput so
     // it takes time to execute 
     // so for this use Style 
      // style={{height: 100, }}

      // when you add height then cursor will start from middle 
      // so use align-top to alig ing it top 
      className=" mb-6 h-28    align-top border rounded-2xl bg-white  text-black"

      />
      {/* Add activity indicator */}

         <Button 
            title= 'Create a course'
            onPress={() => router.push('/create-course')}
            />

            {/* For selecting topics */}
            
      
    </View>
  )
}

export default CreateCourse