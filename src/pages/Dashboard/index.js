import React from 'react';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDelete,
  MdFiberManualRecord,
} from 'react-icons/md';

import { Link } from 'react-router-dom';

import { Container, Funcoes, StatusEntregue } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
        <Funcoes>
          <input placeholder="Buscar por encomenas" />
        </Funcoes>
      </header>
      <table>
        <tr>
          <th>ID</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>#01</td>
          <td>Ludwign van Beetdoven</td>
          <td>
            <img src="https://api.adorable.io/avatars/40/abott@adorable.png" />
            John Doe
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>
            <StatusEntregue>
              <MdFiberManualRecord /> Entregue
            </StatusEntregue>
          </td>
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
          <td>Ludwign van Beetdoven</td>
          <td>
            <img src="https://api.adorable.io/avatars/40/abott@adorable.png" />
            John Doe
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>
            <StatusEntregue>
              <MdFiberManualRecord /> Entregue
            </StatusEntregue>
          </td>
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
          <td>Ludwign van Beetdoven</td>
          <td>
            <img src="https://api.adorable.io/avatars/40/abott@adorable.png" />
            John Doe
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>
            <StatusEntregue>
              <MdFiberManualRecord /> Entregue
            </StatusEntregue>
          </td>
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
          <td>Ludwign van Beetdoven</td>
          <td>
            <img src="https://api.adorable.io/avatars/40/abott@adorable.png" />
            <span>John Doe</span>
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>
            <StatusEntregue>
              <MdFiberManualRecord /> Entregue
            </StatusEntregue>
          </td>
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
