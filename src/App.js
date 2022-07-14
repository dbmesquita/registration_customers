import React, { Component } from "react";
import "./App.css";
import { Button } from "reactstrap";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import StepProgressBar from "./components/StepProgressBar";
import Fribel from "./assets/FRIBEL_SVG.svg";
import Farias from "./assets/FARIAS_SVG.svg";

class App extends Component {
  constructor(props) {
    super(props);

    // Valor inicial
    this.state = {
      currentStep: 1,
      index: "",
      reason: "",
      fantasy: "",
      cgc: "",
      ie: "",
      street_cep: "",
      street: "",
      street_number: "",
      district: "",
      complement: "",
      city: "",
      state: "",
      own_building: "",
      commercial_phone: "",
      commercial_cell: "",
      email: "",
      ramo: ""
    };

    // Bind the submission to handleChange()
    this.handleInputChange = this.handleInputChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }


  // Use the submitted data to set the state
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }




  // _next and _previous functions will be called on button click
  _next(value) {
    //console.log("hii", value);
    let currentStep = this.state.currentStep;
    //let indexStep= this.state.index;
    //console.log(currentStep);
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });

    //console.log(currentStep);
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }


  // Funções para botons avançar e voltar
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button className="button" color="secondary float-left" onClick={this._prev}>
          Voltar
        </Button>
      );
    }

    // ...não exibi nada
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button className="button" color="primary float-right" onClick={this._next}>
          Avançar
        </Button>
      );

    }
    // ...não exibi nada
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <Button className="button" color="primary float-right">Enviar</Button>;
    }
    // ...não exibi nada

    return null;
  }

  render() {
    return (

        <div className="App">
          <div className="container">
            <div className="wrap">
              <div className="form-logo" data-tilt>
                <img src={Fribel} alt='Fribel' className='logo' />
                <img src={Farias} alt='Farias' className='logo' />
              </div>
              <form className="form">
                <div className="form-head">
                  <h1 className="head">Formulário de Cadastro</h1>
                </div>
                <p className="step-guide"></p>
                <div className="fields-container">
                  <div className="field-step">
                    <StepProgressBar currentStep={this.state.currentStep} />
                  </div>
                  <Step1
                    currentStep={this.state.currentStep}
                  />
                  <Step2
                    currentStep={this.state.currentStep}

                  />
                  <Step3
                    currentStep={this.state.currentStep}
                  />
                  <div className="button-container">
                    {this.nextButton}
                    {this.submitButton}
                    {this.previousButton}
                    <span className="focus-button"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
    );
  }
}
export default App;