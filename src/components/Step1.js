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
            <input className="inputLabel"
              type="text"
              placeholder="Razao Social ou Nome Completo"
              id="reason"
              name="reason"
              onChange={props.handleInputChange}
              value={props.reason}
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Nome Fantasia ou Apelido"
              id="fantasy"
              name="fantasy"
              onChange={props.handleInputChange}
              value={props.fantasy}
              required
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Numero do cartao CNPJ ou CPF"
              id="cgc"
              name="cgc"
              onChange={props.handleInputChange}
              value={props.cgc}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="Numero da Inscrição Estadual ou RG"
              id="ie"
              name="ie"
              onChange={props.handleInputChange}
              value={props.ie}
              required
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="text"
              placeholder="Telefone Comercial"
              id="commercial_phone"
              name="commercial_phone"
              onChange={props.handleInputChange}
              value={props.commercial_phone}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="Celular Comercial"
              id="commercial_cell"
              name="commercial_cell"
              onChange={props.handleInputChange}
              value={props.commercial_cell}
              required
            />
          </div>
          <div className="field">
            <input className="inputLabel"
              type="email"
              placeholder="Digite seu E-mail"
              id="text"
              name="email"
              onChange={props.handleInputChange}
              value={props.email}
              required
            />
            <span className="space"></span>
            <select className="inputSelect"
              type="ramo"
              id="ramo"
              name="ramo"
              onChange={props.handleInputChange}
              required>
              <optgroup label="- Selecione uma das Opções -">
                <option value='' disabled selected hidden >Ramo de atividades</option>
                <option value="Padaria">Padaria</option>
                <option value="Comercio">Comercio</option>
                <option value="Supermercado">Supermercado</option>
                <option value="Restaurante">Restaurante</option>
              </optgroup>
            </select>
          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default Step1;
