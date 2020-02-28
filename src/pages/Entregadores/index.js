import React, { useEffect, useState } from 'react';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDelete,
  MdFiberManualRecord,
} from 'react-icons/md';

import { Link } from 'react-router-dom';

import ConfirmButton from '~/components/Button/Confirm';

import { Container, Funcoes, StatusEntregue } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [entregadores, setEntregadores] = useState([]);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get('deliveryman');

      setEntregadores(response.data);
    }
    loadDelivery();
  }, []);

  return (
    <Container>
      <header>
        <strong>Entregadores</strong>
        <Funcoes>
          <input placeholder="Buscar por entregadores " />
          <ConfirmButton type="submit"> + Cadastrar</ConfirmButton>
        </Funcoes>
      </header>
      <table>
        <tr>
          <th>ID</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>

        {entregadores.map(entreador => (
          <tr className="entradores" key={entreador.id}>
            <td>#{entreador.id}</td>
            <td>
              <img src="https://api.adorable.io/avatars/40/abott@adorable.png" />
            </td>
            <td> {entreador.name}</td>
            <td>{entreador.email}</td>
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
                  <Link to="/">
                    <div className="excluir">
                      <MdDelete />
                    </div>
                    Excluir
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
