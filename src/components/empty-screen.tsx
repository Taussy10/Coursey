import { View, Text } from 'react-native'
import React from 'react'


// If the screen is empty then it will show 
// You have to add empty screen in component 
// it's a component so don't add safeareview otherwise it will take more space 


// It deserver three things 
// 1. Title: there are no course  
// Description? optional if you want to add 
// Image: For showing screen is empty
const EmptyScreen = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default EmptyScreen