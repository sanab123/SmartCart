import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class TextInfo extends React.Component {
  render() {
    return (
      <View >
        <Text>helllooo!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
