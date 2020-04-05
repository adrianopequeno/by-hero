import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// importando API de conexão com backend
import api from '../../services/api';
// React-Icons
import { FiLogIn } from 'react-icons/fi';
// CSS página de login
import './style.css';
// IMGS
import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';


export default function Logon() {

  const [id, setID] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sections', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      // dando certo o login, redirec para a página da ONG
      history.push('/profile');
      
    } catch (error) {
      alert('Erro ao fazer login.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes"/>
    </div>
  );
}