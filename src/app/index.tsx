import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Index = () => {
  return (
    // So this is the space will work on 
    <View className='  flex-1  '>
      <Text className='  text-xl font-roboto-semibold'>Index</Text>
      <Button
      onPress={() => router.push("/home")}
      title='Move to home screen'
       />
    </View>
  )
}

export default Index
