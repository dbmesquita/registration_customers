import React from "react";
import { FormGroup } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>

      <FormGroup>
        <div className="fields">

        </div>
      </FormGroup>
    </>
  );
};

export default Step3;
