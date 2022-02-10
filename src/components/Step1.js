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
              placeholder="Fantasia ou Apelido"
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
              placeholder="CNPJ ou CPF"
              id="cgc"
              name="cgc"
              onChange={props.handleInputChange}
              value={props.cgc}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="I.E ou RG"
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
              placeholder="Telefone"
              id="commercial_phone"
              name="commercial_phone"
              onChange={props.handleInputChange}
              value={props.commercial_phone}
              required
            />
            <span className="space"></span>
            <input className="inputLabel"
              type="text"
              placeholder="Celular"
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
              placeholder="E-mail"
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
                <option value="" disabled selected hidden >Ramo de atividades</option>
                <option value="" disabled>- Selecione uma das Opções Abaixo -</option>
                <option value="1">SUPERMERCADO</option>
                <option value="2">ARMAZEM</option>
                <option value="3">MERCEARIA</option>
                <option value="4">PADARIA</option>
                <option value="5">MAGAZINE</option>
                <option value="6">DISTRIBUIDOR</option>
                <option value="7">PESSOA FISICA</option>
                <option value="9">ACOUGUE</option>
                <option value="10">LOJA DE CONVENIENCIA</option>
                <option value="11">MOTEL</option>
                <option value="12">HOTEL</option>
                <option value="13">RESTAURANTE</option>
                <option value="14">PIZZARIAS</option>
                <option value="15">MERCADINHO</option>
                <option value="16">SORVETERIA</option>
                <option value="17">LANCHONETE</option>
                <option value="18">COZINHA INDUSTRIAL</option>
                <option value="19">CASA DE RECEPCAO</option>
                <option value="20">HOSPITAL</option>
                <option value="21">PREFEITURA</option>
                <option value="22">RESIDENCIA</option>
                <option value="23">BALNEARIO</option>
                <option value="24">POSTO DE GASOLINA</option>
                <option value="25">CHURRASCARIA</option>
                <option value="26">CASA DE SHOW</option>
                <option value="27">INDUSTRIA</option>
                <option value="28">PIT DOG</option>
                <option value="29">BAR</option>
                <option value="30">CHURRASQUINHO</option>
                <option value="32">FRUTEIRA</option>
                <option value="33">DEPOSITO</option>
                <option value="34">VENDA DE FRIOS</option>
                <option value="35">FARMACIA</option>
                <option value="36">FLORICULTURA</option>
                <option value="37">MEIO A MEIO</option>
                <option value="38">ACADEMIA</option>
                <option value="39">FRIGORIFICO</option>
                <option value="42">PEIXARIA</option>
                <option value="43">ESCOLA</option>
                <option value="44">PET SHOP</option>
                <option value="45">CLINICA DE ESTETICA</option>
                <option value="46">AEROPORTO</option>
                <option value="48">ORGÃOS RELIGOSOS</option>
                <option value="49">LIVRARIA</option>
            </select>
          </div>
        </div>
      </FormGroup>
    </>
  );
};

export default Step1;
