import React from "react";
import Stepper from "react-stepper-horizontal";
import Button from "../../components/Button";

export default class StepperView extends React.Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0
    };
  }

  goBack = () => {
    this.setState(({ activeStep }) => ({
      activeStep: activeStep <= 0
        ? activeStep
        : activeStep - 1,
    }));
  }

  goForward = () => {
    const { steps } = this.props;

    this.setState(({ activeStep }) => ({
      activeStep: activeStep === steps.length - 1 ? activeStep : activeStep + 1
    }));
  };

  render() {
    const { steps } = this.props;

    const { activeStep } = this.state;

    const { Component } = steps[activeStep];
    const isFirst = activeStep === 0;

    return (
      <div>
        <div>
          <Stepper activeStep={activeStep} steps={steps} />
          <Component />
          {!isFirst && <Button onClick={this.goBack}>Previous</Button>}
          <Button onClick={this.goForward}>Next</Button>
        </div>
      </div>
    );
  }
}
