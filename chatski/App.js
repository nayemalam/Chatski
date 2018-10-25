import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MessageList from './components/MessageList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MessageList />
      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
