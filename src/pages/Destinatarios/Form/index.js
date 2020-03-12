import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, Row, Col } from 'react-grid-system';
import { Formulario } from './styles';

export default function FormEdit() {
  return (
    <Formulario>
      <Container>
        <Form>
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
              <Input name="complmento" />
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
              <Input name="cep" />
            </Col>
          </Row>
        </Form>
      </Container>
    </Formulario>
  );
}
