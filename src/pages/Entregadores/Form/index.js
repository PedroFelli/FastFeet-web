import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import AvatarInput from '~/components/AvatarInput';
import { Container, Funcoes } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
});

export default function Edit({ match }) {
  const { id } = match.params;

  const [initialData, setInitialData] = useState({ avatar: {} });
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
    <Container>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <Funcoes>
          <h1>{id ? 'Editar entregador' : 'Cadastrar entregador'}</h1>
          <div className="butoes">
            <Link to="/deliveryman">
              <button type="button" className="voltar">
                Voltar
              </button>
            </Link>
            <button type="submit" className="salvar">
              Salvar
            </button>
          </div>
        </Funcoes>

        <AvatarInput url={initialData.avatar.url} />

        <p>Nome:</p>
        <Input name="name" placeholder="" />
        <p>Email:</p>
        <Input name="email" type="email" placeholder="" />
      </Form>
    </Container>
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
