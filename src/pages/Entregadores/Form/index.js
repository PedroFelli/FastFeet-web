import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-grid-system';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';
import AvatarInput from '~/components/AvatarInput';
import HeaderForm from '~/components/HeaderForm';
import Formulario from '~/components/Formulario';

export default function Edit({ match }) {
  const { id } = match.params;
  const [initialData, setInitialData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        setLoading(true);

        const response = await api.get(`deliveryman/${id}`);

        const { data } = response;

        if (!data) throw new Error('Error to load deliveryman data');

        if (!response.data.avatar) {
          response.data.avatar = [];
        }

        setInitialData(response.data);
      } catch (error) {
        toast.error('Erro ao carregar dados do entregador.');

        history.push('/deliveryman');
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadDeliveryman();
    }
  }, [id]);

  async function handleSubmit(data) {
    if (id) {
      try {
        const { name, email, avatar_id } = data;

        await api.put(`deliveryman/${id}`, { name, email, avatar_id });

        toast.success('Entregador editado com sucesso.');

        history.push('/deliveryman');
      } catch (error) {
        console.log(error);
        toast.error('Não foi possível atualizar o cadastro.');
      }
    } else {
      try {
        const { name, email, avatar_id } = data;

        await api.post('deliveryman', { name, email, avatar_id });

        toast.success('Entregador cadastrado com sucesso.');

        history.push('/deliveryman');
      } catch (error) {
        toast.error('Não foi possível cadastrar o entregador.');
      }
    }
  }

  return (
    <Formulario>
      <Container>
        <Form initialData={initialData} onSubmit={handleSubmit}>
          <HeaderForm>
            <h2>{id ? 'Editar entregador' : 'Cadastrar entregador'}</h2>
            <div className="butoes">
              <Link to="/deliveryman">
                <Button
                  icon={MdKeyboardArrowLeft}
                  type="button"
                  text="VOLTAR"
                  color="#999"
                />
              </Link>
              <Button
                icon={MdDone}
                disabled={loading ? 1 : 0}
                type="submit"
                text="SALVAR"
                color="#7d40e7"
              />
            </div>
          </HeaderForm>
          <div className="inputs">
            <AvatarInput
              url={
                initialData.avatar
                  ? initialData.avatar.url
                  : 'http://localhost:3333/files/salvar.png'
              }
            />

            <Row>
              <Col md={12}>
                <p>Nome</p>
                <Input name="name" placeholder="" />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>Email:</p>
                <Input name="email" type="email" placeholder="" />
              </Col>
            </Row>
          </div>
        </Form>
      </Container>
    </Formulario>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Edit.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
