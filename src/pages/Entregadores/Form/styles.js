import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  form {
    background: #fff;
    height: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    span {
      font-weight: bold;
    }

    input {
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

  .salvar {
    background: #7d40e7;
  }

  button {
    width: 120px;
    margin: 5px 8px 18px;
    height: 32px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2;

    &:hover {
      background: ${darken(0.1, '#7d40e7')};
    }
  }
`;

export const Avatar = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
