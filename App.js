import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  onPressStartButton() {
    Alert.alert('We are going to start the game!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeHeader}> Stumped </Text>

        <Button
          title="Get Started"
          color='black'
          accessibilityLabel="Start the game"
          onPress={this.onPressStartButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b22222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeHeader: {
    color: 'white',
    fontSize: 100
  },
});
