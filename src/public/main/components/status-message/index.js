import React, { Fragment } from "react";
import Button from "components/common/button";
import Alert from "components/common/alert";

const StatusMessage = ({ correct, toggleExplanation, generateNumber }) => (
  <Fragment>
    {correct ? (
      <Alert
        type="success"
        primary="Correct Answer"
        secondary="Do you want another number?"
      >
        <Button
          onClick={generateNumber}
          variant="outlined"
          marginT="10"
          fullWidth
          size="small"
          color="success"
        >
          New Number
        </Button>
      </Alert>
    ) : (
      <Alert
        type="warning"
        primary="Incorrect answer"
        secondary="Try again or check the explanation above"
      >
        <Button
          size="small"
          fullWidth
          marginT="5"
          variant="outlined"
          color="warning"
          onClick={toggleExplanation}
        >
          Show explanation
        </Button>
      </Alert>
    )}
  </Fragment>
);

export default StatusMessage;
