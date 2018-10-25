import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

// create a functional component (functions instead of classes)
export default ({sender, text, timestamp}) => (
  <View style={styles.container}>
    <Text style={styles.name}>
      {sender} {timestamp}
    </Text>
  </View>
)

const styles= StyleSheet.create({
  container: {
    padding: 10,
  },

  name: {
    color: 'gray',
    fontSize: 12,
  },

  message: {
    fontSize: 16,
  }

})
