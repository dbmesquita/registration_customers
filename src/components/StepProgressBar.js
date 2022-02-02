import React from "react";
import "./StepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = (props) => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
            <div className="step-stage">
              <div className={`stage ${accomplished ? "accomplished" : null}`}>Informações</div>
              <div className={`stage ${accomplished ? "accomplished" : null}`}>Comerciais</div>
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
            <div className="step-stage">
              <div className={`stage ${accomplished ? "accomplished" : null}`}>Endereço</div>
              <div className={`stage ${accomplished ? "accomplished" : null}`}>Comercial</div>
            </div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              {index + 1}
            </div>
            <div className="step-stage">
              <div className={`stage ${accomplished ? "accomplished" : null}`}>Anexos</div>
            </div>
          </>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
