import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageList from './components/MessageList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MessageList />
        // <Text>Open up App.js to start working on your app!</Text>
        // <Text>Yooo Famm </Text>
        // <Text>new Text File</Text>
        // <Text>Hello from the other side</Text>
        // <Text>REACT COURSE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornsilk',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
