import React, { Component } from 'react';
import Container from '../Container/Container';
import Section from '../../components/Section/Section';
import FeedbackOptions from '../../components/FeedbackForm/FeedbackOptions';
import Notification from '../../components/Notification/Notification';
import Statistics from '../../components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const targetButton = e.currentTarget;
    targetButton.style.backgroundColor = 'rgb(126, 179, 247)';
    setTimeout(() => {
      targetButton.style.backgroundColor = 'rgb(239, 239, 239)';
    }, 100);

    this.setState(prevState => {
      return {
        [`${targetButton.name}`]: prevState[`${targetButton.name}`] + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (total, feedback) => total + feedback,
      0,
    );
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return this.countTotalFeedback()
      ? `${Math.round((good / this.countTotalFeedback()) * 100)}%`
      : `${this.countTotalFeedback()}%`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
