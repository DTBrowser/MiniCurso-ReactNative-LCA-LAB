import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  primaryColor,
  textIcons,
  titleStyle,
  normalText,
  subTitles,
  fonts,
} from './config/styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});