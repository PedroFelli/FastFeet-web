import React, { useEffect, useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Funcoes } from './styles';

export default function Edit({ match }) {
  const { id } = match.params;

  const [initialData, setInitialData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        setLoading(true);

        const response = await api.get(`deliveryman/${id}`);

        const { data } = response;

        if (!data) throw new Error('Error to load deliveryman data');

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
        const { title, duration, price } = data;

        await api.put(`deliveryman/${id}`, { title, duration, price });

        toast.success('Plano editado com sucesso.');

        history.push('/deliveryman');
      } catch (error) {
        toast.error('Não foi possível cadastrar o plano.');
      }
    } else {
      try {
        const { title, duration, price } = data;

        await api.post('deliveryman', { title, duration, price });

        toast.success('Plano cadastrado com sucesso.');

        history.push('/deliveryman');
      } catch (error) {
        toast.error('Não foi possível cadastrar o plano.');
      }
    }
  }

  return (
    <Container>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <Funcoes>
          <h2>Cadastro de entregadores</h2>
          <div>
            <button type="button" className="voltar">
              Voltar
            </button>
            <button type="submit" className="salvar">
              Salvar
            </button>
          </div>
        </Funcoes>

        <span>Nome:</span>
        <Input name="name" placeholder="" />
        <span>Email:</span>
        <Input name="email" type="email" placeholder="" />
      </Form>
    </Container>
  );
}
