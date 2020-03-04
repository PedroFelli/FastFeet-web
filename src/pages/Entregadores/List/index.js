import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MdMoreHoriz, MdDelete } from 'react-icons/md';

import ConfirmButton from '~/components/Button/Confirm';

import { Container, Funcoes } from './styles';
import api from '~/services/api';

export default class Dashboard extends Component {
  state = {
    deliverymans: [],
  };

  async componentDidMount() {
    const response = await api.get('deliveryman');

    this.setState({ deliverymans: response.data });
  }

  handleDelete = deliveryman => {
    console.log(deliveryman.id);

    api.delete(`deliveryman/${deliveryman.id}`);

    this.setState({
      deliverymans: this.state.deliverymans.filter(d => d !== deliveryman),
    });
  };

  render() {
    const { deliverymans } = this.state;

    return (
      <Container>
        <header>
          <strong>Entregadores</strong>
          <Funcoes>
            <input placeholder="Buscar por entregadores " />
            <Link to={`deliveryman/form`}>
              <ConfirmButton type="submit"> + Cadastrar</ConfirmButton>
            </Link>
          </Funcoes>
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymans.map(deliveryman => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td>
                  <img src={deliveryman.avatar.url} />
                </td>
                <td> {deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <div className="dropdown">
                    <MdMoreHoriz />
                    <div className="dropdown-content">
                      <Link to={`deliveryman/${deliveryman.id}`}>
                        <button type="button">
                          <div>
                            <MdDelete color="#4d85ee" />
                          </div>
                          Editar
                        </button>
                      </Link>
                      <button
                        type="button"
                        onClick={() => this.handleDelete(deliveryman)}
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
          </tbody>
        </table>
      </Container>
    );
  }
}
