import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { MdAdd, MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { Container, Funcoes } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Destinatarios() {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRecipients() {
      try {
        setLoading(true);

        const response = await api.get('recipients');
        setRecipients(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error('Erro ao carregar dados.');

        history.push('/dashboard');
      } finally {
        setLoading(false);
      }
    }

    loadRecipients();
  }, []);

  function handleDelete(id) {
    console.log(id);

    api.delete(`recipients/${id}`);

    setRecipients(recipients.filter(r => r.id !== id));
  }

  return (
    <Container>
      <header>
        <strong>Destinatarios</strong>
        <Funcoes>
          <input placeholder="Buscar por destinatarios " />
          <Link to="/recipients/new">
            <button type="button">
              <MdAdd size={14} />
              Cadastrar
            </button>
          </Link>
        </Funcoes>
      </header>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>

        {recipients.map(recipient => (
          <tr key={recipient.id}>
            <td>#{recipient.id}</td>
            <td>{recipient.nome}</td>
            <td>
              {recipient.rua}, {recipient.numero}, {recipient.cidade},{' '}
              {recipient.estado}
            </td>
            <td>
              <div className="dropdown">
                <MdMoreHoriz />
                <div className="dropdown-content">
                  <Link to="/">
                    <div className="editar">
                      <MdModeEdit />
                    </div>
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(recipient.id)}
                  >
                    <div>
                      <MdDelete color="#ff0000" />
                    </div>
                    Excluir
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
