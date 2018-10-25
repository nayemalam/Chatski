// always import this for react
import React from 'react'

//importing viewport and text from react-native library
import {StyleSheet, TextInput, View, Text} from 'react-native'

//import message.js
import Message from './Message'

// export new class called "MessageList" (like C - header file)
export default class MessageList extends React.Component {


// state (mutable prop)
state = {
  // an array of messages to be displayed
   messages: [
  {
    id: 1,
    sender: 'Nayem Alam',
    text: 'One bottle of beer on the wall',
    timestamp: '1 month ago',
  },
  {
    id: 2,
    sender: 'Mathias Collum',
    text: 'Three bottles of beer on the wall',
    timestamp: '2 hours ago',
  },
  {
    id: 3,
    sender: 'Kap G',
    text: 'Testing',
    timestamp: '2 minutes ago',
  },
],
newMsgText: '', // type by user
}

// this method/function will update the state variable newMsgText everytime
// a user types in a character (like messenger when someone is typing)
// setState: updates a state variable
updateMessage = (newMsgText) => this.setState({newMsgText});

// add messages to the chat history
addMessage = () => {
  const text = this.state.newMsgText.trim(); // trim removes whitespace

  // no text being typed
  if(text.length< 1) {
    return;
  }
  console.log("Debug: ", text)

  const currentDate = new Date(); // get js Date

  const newMsg  = {
    id: currentDate.getTime(),
    sender: 'nayem',
    text: text,
    timestamp: currentDate.getTime(),
  }

  this.setState ({
    messages: [...this.state.messages, newMsg],
    newMsgText: ' ',
  })
}

// every React component needs a render component
  render() {
    // every render returns some JSX

    // create an array of objects (text, id, etc)
    // now each object represents a message with an 'id' and 'text' property

  //   const messages = [
  //   {
  //     id: 1,
  //     sender: 'Nayem Alam',
  //     text: 'Yo famm',
  //     timestamp: '1 month ago',
  //   },
  //   {
  //     id: 2,
  //     sender: 'Mathias Collum',
  //     text: 'Helllo',
  //     timestamp: '2 hours ago',
  //   },
  //   {
  //     id: 3,
  //     sender: 'Kap G',
  //     text: 'Testing',
  //     timestamp: '2 minutes ago',
  //   },
  // ];

    return (
      <View style={styles.container}>
      {this.state.messages.map(msg=> (
        <Message
        key={msg.id}
        sender={msg.sender}
        text={msg.text}
        timestamp={msg.timestamp}
        />
      ))}

      <TextInput
        placeholder="What's on your mind Dhoumbi?"
        value={this.state.newMsgText}
        onChangeText={this.UpdateMessage}
        onSubmitEditing={this.addMessage}
        style={{height: 70, padding: 15}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  }
});
