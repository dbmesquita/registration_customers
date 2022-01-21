import React from "react";
import { FormGroup } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <FormGroup>
        <div className="fields">
          <div className="field">
            <input
              type="text"
              placeholder="Digite aqui seu CEP"
              id="street_cep"
              name="street_cep"
              onChange={props.handleInputChange}
              value={props.street_cep}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Rua"
              id="street"
              name="street"
              onChange={props.handleInputChange}
              value={props.street}
            />
            <span className="space"></span>
            <input
              type="text"
              placeholder="Número"
              id="street_number"
              name="street_number"
              onChange={props.handleInputChange}
              value={props.street_number}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Bairro"
              id="district"
              name="district"
              onChange={props.handleInputChange}
              value={props.district}
            />
            <span className="space"></span>
            <input
              type="text"
              placeholder="Complemento"
              id="complement"
              name="complement"
              onChange={props.handleInputChange}
              value={props.complement}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Cidade"
              id="city"
              name="city"
              onChange={props.handleInputChange}
              value={props.city}
            />
            <span className="space"></span>
            <input
              type="text"
              placeholder="Estado"
              id="state"
              name="state"
              onChange={props.handleInputChange}
              value={props.state}
            />
          </div>
          <div className="field" onChange={props.handleInputChange} value={props.own_building}>
            <input type="radio" id="own_building" name="own_building" /> Sim
            <input type="radio" id="own_building" name="own_building" /> Não
          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default Step2;
