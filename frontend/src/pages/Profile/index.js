import React from 'react';
import { Link } from 'react-router-dom';

// React-Icons
import { FiPower, FiTrash2 } from 'react-icons/fi';

// CSS página de Profile
import './style.css';

// IMGS
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vida, ADOTA Patos</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO</strong>
          <p>Cado Teste</p>

          <strong>DESCRIçÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#E02041" />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Cado Teste</p>

          <strong>DESCRIçÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#E02041" />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Cado Teste</p>

          <strong>DESCRIçÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#E02041" />
          </button>
        </li>
        <li>
          <strong>CASO</strong>
          <p>Cado Teste</p>

          <strong>DESCRIçÃO</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#E02041" />
          </button>
        </li>
      </ul>
    </div>
  );
}