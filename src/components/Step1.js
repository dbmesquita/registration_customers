import React from "react";
import { FormGroup } from "reactstrap";

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <div onClick={() => props.next("1")}></div>
      <FormGroup>
        <div className="fields">
          <div className="field">
            <input
              type="text"
              placeholder="Razao Social ou Nome Completo"
              id="reason"
              name="reason"
              onChange={props.handleInputChange}
              value={props.reason}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Nome Fantasia ou Apelido"
              id="fantasy"
              name="fantasy"
              onChange={props.handleInputChange}
              value={props.fantasy}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Numero do cartao CNPJ ou CPF"
              id="cgc"
              name="cgc"
              onChange={props.handleInputChange}
              value={props.cgc}
            />
            <span className="space"></span>
            <input
              type="text"
              placeholder="Numero da Inscrição Estadual ou RG"
              id="ie"
              name="ie"
              onChange={props.handleInputChange}
              value={props.ie}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Telefone Comercial"
              id="commercial_phone"
              name="commercial_phone"
              onChange={props.handleInputChange}
              value={props.commercial_phone}
            />
            <span className="space"></span>
            <input
              type="text"
              placeholder="Celular Comercial"
              id="commercial_cell"
              name="commercial_cell"
              onChange={props.handleInputChange}
              value={props.commercial_cell}
            />
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Digite seu E-mail"
              id="email"
              name="email"
              onChange={props.handleInputChange}
              value={props.email}
            />
            <span className="space"></span>
            <select
              type="ramo"
              placeholder="Ramo de atividades"
              id="ramo"
              name="ramo"
              onChange={props.handleInputChange} >
              <option value="volvo">- Selecione uma Opção - </option>
              <option value="volvo">Padaria</option>
              <option value="saab">Comercio</option>
              <option value="opel">Supermercado</option>
              <option value="audi">Restaurante</option>
            </select>
          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default Step1;
