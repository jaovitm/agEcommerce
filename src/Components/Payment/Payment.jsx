import React from 'react'
import {BsCreditCard2Front} from 'react-icons/bs'
import { MdAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import './Payment.css'

const Payment = () => {
  return (
    <>
      <div className="container-payment-all">
        <div className="container pay-container">
          <div className="card">
            <div className="card-info">
              <h1>Pagamento Rapido e Seguro</h1>
              <h5>Com o AluraBank</h5>
            </div>
            <div className="card-icon">
              <BsCreditCard2Front className="icon" />
            </div>
          </div>
        </div>

        <div className="container pay-container">
          <div className="card">
            <div className="card-info">
              <h1>Até 12x sem juros</h1>
              <h5>Acima de R$200</h5>
            </div>
            <div className="card-icon">
              <GiReceiveMoney className="icon" />
            </div>
          </div>
        </div>

        <div className="container pay-container">
          <div className="card">
            <div className="card-info">
              <h1>Pague com Pix</h1>
              <h5>Seu pedido aprovado em até 2 horas</h5>
            </div>
            <div className="card-icon">
              <MdAttachMoney className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment