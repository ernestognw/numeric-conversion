import React, { Component } from "react";
import Typography from "components/common/typography";
import Input from "components/common/input";
import Button from "components/common/button";
import confirmation from "components/templates/confirmation";
import Alert from "components/common/alert/";
import toast from "components/common/toast";
import NumberTable from "./components/number-table";
import Explanation from "./components/explanation";
import StatusMessage from "./components/status-message";
import { Card, CardBody } from "./elements";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      number: [0, 0, 0, 0, 0, 0, 0, 0],
      answered: false,
      correct: false,
      base: 2
    };
  }

  componentDidMount = () => {
    this.generateNumber();
  };

  handleAnswerInput = ({ target }) => {
    const { value } = target;
    if (/^[0-9]*$/g.test(value)) {
      this.setState({
        answer: value
      });
    }
  };

  generateNumber = () => {
    const number = new Array(8);
    for (let bit = 0; bit < number.length; bit++) {
      number[bit] = Math.round(Math.random());
    }
    this.setState({
      number,
      answered: false,
      correct: false,
      answer: "",
      showExplanation: false
    });
  };

  getRealAnswer = () => {
    const { number, base } = this.state;
    let realAnswer = 0;

    for (let bit = 0; bit < number.length; bit++) {
      if (number[number.length - 1 - bit]) {
        realAnswer += number[number.length - 1 - bit] * base ** bit;
      }
    }

    return realAnswer;
  };

  check = () => {
    let { answer } = this.state;
    if (answer) {
      answer = Number(answer);

      this.setState({
        answered: true,
        correct: this.getRealAnswer() === answer,
        showExplanation: false
      });
    } else {
      toast.warning(
        "Answer needed",
        "You need to provide an answer to check if it's correct"
      );
    }
  };

  newNumber = async () => {
    if (
      await confirmation(
        "Generate a new number",
        "Are you sure you want to generate another random number?"
      )
    ) {
      this.generateNumber();
    }
  };

  toggleExplanation = () =>
    this.setState(({ showExplanation }) => ({
      showExplanation: !showExplanation
    }));

  render() {
    const {
      answer,
      number,
      answered,
      correct,
      showExplanation,
      base
    } = this.state;
    return (
      <Card>
        <CardBody>
          <Typography align="center" variant="heading">
            Enter decimal answer here
          </Typography>
          <Input
            prefix="Decimal value"
            align="center"
            onChange={this.handleAnswerInput}
            value={answer}
            marginB="10"
          />
          <NumberTable number={number} base={base} />
          {answered && (
            <StatusMessage
              correct={correct}
              toggleExplanation={this.toggleExplanation}
              generateNumber={this.generateNumber}
            />
          )}
          {showExplanation && (
            <Alert
              type="info"
              primary="Explanation"
              secondary="You can review the process to get the correct answer here"
            >
              <Explanation
                toggleExplanation={this.toggleExplanation}
                getRealAnswer={this.getRealAnswer}
                number={number}
                base={base}
              />
            </Alert>
          )}
          <Button onClick={this.check} marginT="20" fullWidth color="primary">
            Check
          </Button>
          <Button
            onClick={this.newNumber}
            marginT="10"
            fullWidth
            color="secondary"
          >
            New Number
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default Main;
