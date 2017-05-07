import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false
    }
    this.handleOnPress = this.handleOnPress.bind(this)
  }

  handleOnPress() {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  render() {
    return (
      <View>
        <Text style={styles.question}>Here is the question</Text>
        <Button
          title="Answer"
          color='black'
          onPress={this.handleOnPress}
        />
        { this.state.showAnswer &&
          <View>
            <Text style={styles.answer}>Answer</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    color: 'white',
    fontSize: 50
  },
  answer: {
    color: 'black',
    fontSize: 30
  }
})
