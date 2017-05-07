import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "stumped",
      buttonText: "Get Started"
    }
  }

  handleOnPress() {
    this.setState({ text: "Whats your favorite color?", buttonText: "Answer" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeHeader}>{ this.state.text }</Text>

        <Button
          title={ this.state.buttonText }
          color='black'
          onPress={this.handleOnPress.bind(this)}
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

