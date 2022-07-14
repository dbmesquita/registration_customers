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
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Digite aqui seu CEP"
              id="street_cep"
              name="street_cep"
              onChange={props.handleInputChange}
              value={props.street_cep}
              required
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Rua"
              id="street"
              name="street"
              onChange={props.handleInputChange}
              value={props.street}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="Número"
              id="street_number"
              name="street_number"
              onChange={props.handleInputChange}
              value={props.street_number}
              required
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Bairro"
              id="district"
              name="district"
              onChange={props.handleInputChange}
              value={props.district}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="Complemento"
              id="complement"
              name="complement"
              onChange={props.handleInputChange}
              value={props.complement}
              required
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Cidade"
              id="city"
              name="city"
              onChange={props.handleInputChange}
              value={props.city}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="Estado"
              id="state"
              name="state"
              onChange={props.handleInputChange}
              value={props.state}
              required
            />
          </div>
          <div className="field" onChange={props.handleInputChange} value={props.own_building}>
            <div className="formRadio">
              <span className="formRadio">Pronto proprio?</span>
              <span className="space"></span>
              <span className="space"></span>
              <input className="inputRadio" type="radio" id="own_building" value="S" name="own_building" /> Sim
              <span className="space"></span>
              <input className="inputRadio" type="radio" id="own_building" value="N" name="own_building" /> Não
            </div>

          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default Step3;
