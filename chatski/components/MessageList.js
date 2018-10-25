// always import this for react
import React from 'react'

//importing viewport and text from react-native library
import {StyleSheet, TextInput, View} from 'react-native'

//import message.js
import Message from './Message'

// export new class called "MessageList" (like C - header file)
export default class MessageList extends React.Component {

// every React component needs a render component
  render() {
    // every render returns some JSX

    // create an array of objects (text, id, etc)
    // now each object represents a message with an 'id' and 'text' property

    const messages = [
    {
      id: 1,
      sender: 'Nayem Alam',
      text: 'Yo famm',
      timestamp: '1 month ago',
    },
    {
      id: 2,
      sender: 'Mathias Collum',
      text: 'Helllo',
      timestamp: '2 hours ago',
    },
    {
      id: 3,
      sender: 'Kap G',
      text: 'Testing',
      timestamp: '2 minutes ago',
    },
  ];

    return (
      <View style={styles.container}>

      {messages.map(msg=> (
        <Message key={msg.id} sender={msg.sender} text={msg.text} timestamp={msg.timestamp} />
      ))}

      <TextInput
        placeholder="What's on your mind?"
        value={null}
        onChangeText={null}
        onSubmitEditing={null}
        style={{height: 70, padding: 10}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  }
});
