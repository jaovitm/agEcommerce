import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container footer-container">
        <img src={Logo} alt="AluraGeek Logo" className="footer-Logo" />

        <div className="footer-links">
          <Link to="" className="a">
            Quem somos nós
          </Link>
          <Link to="" className="a">
            Politica de privacidade
          </Link>
          <Link to="" className="a">
            Programa fidelidade
          </Link>
          <Link to="" className="a">
            Nossas Lojas
          </Link>
          <Link to="" className="a">
            Quero ser franqueado
          </Link>
          <Link to="" className="a">
            Anuncie aqui
          </Link>
        </div>

        <div className="footer-contact">
          <form action="">
            <h5>Fale Conosco</h5>

            <label htmlFor="contact-name">Nome</label>
            <input
              type="text"
              name="name"
              id="contact-name"
              placeholder="John Doe"
            />

            <label htmlFor="contact-message">Sua Mensagem</label>

            <textarea
              name="message"
              id="footer-message"
              placeholder="Olá! Gostaria de saber mais sobre..."
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className='copy'>Desenvolvido por João Vitor M. De Sá &copy; 2022</div>
      </div>
    </>
  );
}

export default Footer