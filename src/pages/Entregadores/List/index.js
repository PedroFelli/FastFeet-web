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

export default function List() {
  const [deliverymans, setDeliverymans] = useState(['']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        setLoading(true);

        const response = await api.get('deliveryman');
        setDeliverymans(response.data);
      } catch (error) {
        toast.error('Erro ao carregar dados.');

        history.push('/dashboard');
      } finally {
        setLoading(false);
      }
    }

    loadDeliveryman();
  }, []);

  function handleDeliveryman(id) {
    async function deleteDeliveryman() {
      try {
        await api.delete(`deliveryman/${id}`);

        toast.success('Entregador excluído com sucesso.');

        setDeliverymans(deliverymans.filter(r => r.id !== id));
      } catch (_) {
        toast.error('Não foi possível excluir este entregador.');
      }
    }

    confirmAlert({
      customUI: (
        { onClose } // eslint-disable-line
      ) => (
        <ConfirmAlert
          callback={deleteDeliveryman}
          onClose={onClose}
          title="Deseja excluir este entregador?"
          message={<p>Deseja mesmo excluí-lo?</p>}
        />
      ),
    });
  }

  return (
    <Container>
      <header>
        <strong>Entrergadores</strong>
        <Funcoes>
          <input placeholder="Buscar por entregadores " />
          <Link to="/deliveryman/new">
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
          <th>Foto</th>
          <th>Nome</th>
          <th>email</th>
          <th>Ações</th>
        </tr>

        {deliverymans.map(deliveryman => (
          <tr key={deliveryman.id}>
            <td>#{deliveryman.id}</td>
            <td>
              <img
                src={
                  deliveryman.avatar
                    ? deliveryman.avatar.url
                    : 'https://api.adorable.io/avatars/abott@adorable.png'
                }
                alt={deliveryman.name}
              />
            </td>
            <td> {deliveryman.name}</td>
            <td>{deliveryman.email}</td>
            <td>
              <div className="dropdown">
                <MdMoreHoriz />

                <div className="dropdown-content">
                  <Link to={`deliveryman/${deliveryman.id}`}>
                    <MdModeEdit color="#4D85EE" />
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDeliveryman(deliveryman.id)}
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
