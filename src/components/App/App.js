import React, { Component } from 'react';
import Container from '../Container/Container';
import Statistics from '../../components/Statistics/Statistics';
import Section from '../../components/Section/Section';
import FeedbackOptions from '../../components/FeedbackForm/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    this.setState(prevState => {
      for (const key in this.state) {
        if (key === e.target.textContent.toLowerCase()) {
          return {
            [key]: prevState[key] + 1,
          };
        }
      }
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback()
      ? `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`
      : `${this.countTotalFeedback()}%`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Container>
    );
  }
}

export default App;
