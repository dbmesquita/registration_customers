function Steps(props) {
  let steps = props.steps;

  const stepsWithAdaptedProps = props.children.map((child, idx) => {
    const newProps = {
      active: idx === props.current ? 'active' : '',
      complete: idx < props.current ? 'complete' : '',
      isLast:
        idx === props.current - 1 && idx === props.children.length - 1
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
      <ol className="steps">{stepsWithAdaptedProps}</ol>
    </>
  );
}

/** */

function Step(props) {
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

/** */

function StepProgressBar(props) {
  const [current, setCurrent] = React.useState(0);
  
  const prev = () => {
    if (current > 0)
      setCurrent(current - 1);
  };

  const next = () => {
    if (current < 3)
      setCurrent(current + 1);
  };
  
  return(
    <>
      <Steps current={current}>
        <Step title="Informações" idx={0} />
        <Step title="Endereço" idx={1} />
        <Step title="Anexos" idx={2} />
      </Steps>
      <button onClick={() => prev()}>previous</button>
      <button onClick={() => next()}>next</button>
    </>
  )
}

ReactDOM.render(
  <App/>, document.getElementById("root"));