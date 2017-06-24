import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: "",
      showAnswer: false,
      isLoading: true
    }
    this.fetchQuestion = this.fetchQuestion.bind(this)
    this.handleOnPress = this.handleOnPress.bind(this)
    this.handleOnStartOverPress = this.handleOnStartOverPress.bind(this)
  }

  componentDidMount() {
    this.fetchQuestion()
  }

  fetchQuestion() {
    this.resetQuestion()
    return fetch('http://jservice.io/api/random', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        question: data[0].question,
        answer: data[0].answer,
        isLoading:false })
    })
    .catch((error) => console.error(error))
  }

  handleOnPress() {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  handleOnStartOverPress() {
    this.props.startOver()
  }

  resetQuestion() {
    this.setState({
      question: "",
      answer: "",
      showAnswer: false,
      isLoading: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Next"
          disabled={this.state.isLoading}
          color='black'
          onPress={this.fetchQuestion}
        />
        <View>
          <Text style={styles.question}>{this.state.question}</Text>
        </View>
        <Button
          title="Answer"
          color='black'
          onPress={this.handleOnPress}
        />
        { this.state.showAnswer &&
          <View>
            <Text style={styles.answer}>{this.state.answer}</Text>
          </View>
        }
        <Button
          title="Start Over"
          color='black'
          onPress={this.handleOnStartOverPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  question: {
    color: 'white',
    fontSize: 50
  },
  answer: {
    color: 'black',
    fontSize: 30
  }
})
