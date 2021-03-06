import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { MdAdd, MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import { Container, Funcoes } from './styles';

import 'react-confirm-alert/src/react-confirm-alert.css';
import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';
import ConfirmAlert from '~/components/ConfirmAlert';

export default function Destinatarios() {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRecipients() {
      try {
        setLoading(true);

        const response = await api.get('recipients');
        setRecipients(response.data);
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
    async function deleteRecipient() {
      try {
        await api.delete(`recipients/${id}`);

        toast.success('Destinatario excluída com sucesso.');

        setRecipients(recipients.filter(r => r.id !== id));
      } catch (_) {
        toast.error('Não foi possível excluir esta matrícula.');
      }
    }

    confirmAlert({
      customUI: (
        { onClose } // eslint-disable-line
      ) => (
        <ConfirmAlert
          callback={deleteRecipient}
          onClose={onClose}
          title="Deseja excluir este destinatario?"
          message={<p>Deseja mesmo excluí-lo?</p>}
        />
      ),
    });
  }

  return (
    <Container>
      <header>
        <strong>Destinatarios</strong>
        <Funcoes>
          <input placeholder="Buscar por destinatarios " />
          <Link to="/recipients/new">
            <Button
              icon={MdAdd}
              disabled={loading ? 1 : 0}
              type="submit"
              text="CADASTRAR"
              color="#7d40e7"
            />
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
                  <Link to={`recipients/${recipient.id}`}>
                    <MdModeEdit color="#4D85EE" />
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(recipient.id)}
                  >
                    <MdDelete color="#ff0000" />
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
