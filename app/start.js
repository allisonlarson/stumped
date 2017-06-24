import React from 'react';
import Question from './question';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false
    }
    this.handleOnPress = this.handleOnPress.bind(this)
    this.startGameOver = this.startGameOver.bind(this)
  }

  handleOnPress() {
    this.setState({ isPlaying: true })
  }

  startGameOver() {
    this.setState({ isPlaying: false })
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.isPlaying ? (
          <Question
            startOver={this.startGameOver}
          />
          ) : (
          <View>
            <Text style={styles.welcomeHeader}>stumped</Text>
            <Button
              title="Get Started"
              color='black'
              onPress={this.handleOnPress}
            />
          </View>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#b22222',
    justifyContent: 'center'
  },
  welcomeHeader: {
    color: 'white',
    fontSize: 100
  },
});

