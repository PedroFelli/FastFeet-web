import React, { useEffect } from 'react';

import api from '~/services/api';

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

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Destinatarios</strong>
        <Funcoes>
          <input placeholder="Buscar por destinatarios " />
          <ConfirmButton type="submit"> + Cadastrar</ConfirmButton>
        </Funcoes>
      </header>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
        <tr>
          <td>#01</td>
          <td> John Doe</td>
          <td>Rua Beethoven, 19090, Diadema, São Paulo</td>
          <td>
            <div className="dropdown">
              <MdMoreHoriz />
              <div className="dropdown-content">
                <Link to="/">
                  <div className="visualizar">
                    <MdRemoveRedEye />
                  </div>
                  Visualizar
                </Link>
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
      </table>
    </Container>
  );
}
