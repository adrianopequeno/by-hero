import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// React-Icons
import { FiPower, FiTrash2 } from 'react-icons/fi';
// importando API de conexão com backend
import api from '../../services/api';
// CSS página de Profile
import './style.css';
// IMGS
import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const [incidents, setIncidents] = useState([]);
  
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  // Função responsável por disparar uma outra função para a listagem dos casos da ONG
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  // Função de excluir/deletar um caso
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`,{
        headers: {
          Authorization: ongId,
        }
      });

      // recarrega a página com os dados atualizados
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  // Função de Logout/Saiir do sistema
  function handleLogout() {
    localStorage.clear(); // limpa todo o locastorage

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vida, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.ide}>
            <strong>CASO</strong>
            <p>{incident.title}</p>

            <strong>DESCRIçÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#E02041" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}