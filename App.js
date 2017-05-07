import React from 'react';
import Question from './question';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false
    }
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress() {
    this.setState({ isPlaying: true })
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.isPlaying ? (
          <Question />
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
    backgroundColor: '#b22222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeHeader: {
    color: 'white',
    fontSize: 100
  },
});

