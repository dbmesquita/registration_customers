import React from "react";
import "./StepProgressBar.css";

function StepProgressBar(props) {
  /*const [current, setCurrent] = React.useState(0);*/
  var current = props.currentStep -1;

  if (props.currentStep < 4 ){
    current = current + 1;
  }
  if (props.currentStep > 0 ){
    current = current - 1;
  }

  /*const prev = () => {
    if (current > 0)
      setCurrent(current - 1);
  };

  const next = () => {
    if (current < 3)
      setCurrent(current + 1);
  };*/
 
  function Steps(props) {
  
    const stepsWithAdaptedProps = props.children.map((child, idx) => {
      const newProps = {
        active: idx === current ? 'active' : '',
        complete: idx < current ? 'complete' : '',
        isLast:
          idx === current - 1 && idx === props.children.length - 1
            ? 'isLast'
            : '',
      };
  
      if (React.isValidElement(child)) {
        return React.cloneElement(child, newProps);
      }
      return child;
    });


    return (
      <>
        <ol className="steps"
          key={props.idx}>{stepsWithAdaptedProps}</ol>
      </>
    );
  }
console.log()
  function Step(props) {
    console.log(props)
    return (
      <li
        className={`step ${props.active ? 'is-active' : ''} ${
          props.complete ? 'is-complete' : ''
        }`}
        data-step={props.idx + 1}
        key={props.idx}
      >
        {(props.active || props.isLast) && props.title}
      </li>
    );
  }
/*console.log(current)*/
  
  return(
    <>
      <Steps current={current}>
        <Step title="Informações" idx={0} />
        <Step title="Endereço" idx={1} />
        <Step title="Anexos" idx={2} />
      </Steps>
    </>
  )
}

export default StepProgressBar;