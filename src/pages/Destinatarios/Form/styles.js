import styled from 'styled-components';
import { darken } from 'polished';

export const Formulario = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  form {
    background: #fff;

    padding: 30px;
    display: flex;
    flex-direction: column;

    p {
      color: #444444;
      font-weight: bold;
      font-size: 14px;
    }

    span {
      font-weight: bold;
      color: red;
      font-size: 12px;
    }

    input {
      width: 100%;
      font-size: 16px;
      text-indent: 10px;
      border: 0.5;
      border-radius: 4px;
      height: 34px;
      color: #666666;
      margin: 8px 0;
      border: 1px solid #ccc;
    }
  }
`;

export const Funcoes = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: #fff;
    font-size: 16px;
  }

  .butoes {
    display: flex;
  }

  .salvar {
    background: #7d40e7;
    &:hover {
      background: ${darken(0.3, '#7d40e7')};
    }
  }

  button {
    display: flex;
    align-items: flex-end;
    padding-left: 19px;
    width: 120px;
    background: #cccccc;
    margin: 5px 4px 0;
    height: 40px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2;
    &:hover {
      background: ${darken(0.3, '#CCCCCC')};
    }
  }
`;
