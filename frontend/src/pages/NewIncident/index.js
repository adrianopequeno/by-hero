import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// CSS NewIncident/style
import './style.css';

// IMGS
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
      <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um hério para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição do caso" />

          <input placeholder="Velor em reais R$" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}