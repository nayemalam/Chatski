import React from 'react'
import {Text, View} from 'react-native'

// create a functional component (functions instead of classes)
export default (props) => (
  <View>
    <Text>
      {props.text}
    </Text>
  </View>
)
