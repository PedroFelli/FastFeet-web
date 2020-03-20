import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';

import { Formulario, Funcoes } from './styles';

export default function Edit({ match }) {
  const { id } = match.params;

  const [cepMask, setCepMask] = useState('');
  const [initialData, setInitialData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        setLoading(true);

        const response = await api.get(`recipients/${id}`);

        const { data } = response;

        setCepMask(data.cep);

        if (!data) throw new Error('Error to load recipients data');

        setInitialData(response.data);
      } catch (error) {
        toast.error('Erro ao carregar dados do entregador.');

        history.push('/recipients');
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
        const { rua, nome, numero, complemento, estado, cidade } = data;

        await api.put(`recipients/${id}`, {
          rua,
          nome,
          numero,
          complemento,
          estado,
          cidade,
          cep: cepMask,
        });

        toast.success('Destinatario editado com sucesso.');

        history.push('/recipients');
      } catch (error) {
        console.log(error);
        toast.error('Não foi possível atualizar o cadastro.');
      }
    } else {
      try {
        const { rua, nome, numero, complemento, estado, cidade } = data;

        await api.post('recipients', {
          rua,
          nome,
          numero,
          complemento,
          estado,
          cidade,
          cep: cepMask,
        });

        toast.success('Destinatario cadastrado com sucesso.');

        history.push('/recipients');
      } catch (error) {
        toast.error('Não foi possível cadastrar o destinatario.');
      }
    }
  }

  return (
    <Formulario>
      <Container>
        <Form initialData={initialData} onSubmit={handleSubmit}>
          <Funcoes>
            <h1>{id ? 'Editar destinatário' : 'Cadastrar destinatário'}</h1>
            <div className="butoes">
              <Link to="/recipients">
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
          </Funcoes>
          <Row>
            <Col md={12}>
              <p>Nome</p>
              <Input name="nome" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <p>Rua</p>
              <Input name="rua" />
            </Col>
            <Col md={3}>
              <p>Número</p>
              <Input name="numero" />
            </Col>
            <Col md={3}>
              <p>Complemento</p>
              <Input name="complemento" />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <p>Cidade</p>
              <Input name="cidade" />
            </Col>
            <Col md={4}>
              <p>Estado</p>
              <Input name="estado" />
            </Col>
            <Col md={4}>
              <p>CEP</p>
              <InputMask
                name="cep"
                mask="99999-999"
                maskChar=" "
                alwaysShowMask={false}
                value={cepMask}
                onChange={e => [setCepMask(e.target.value)]}
              />
            </Col>
          </Row>
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
