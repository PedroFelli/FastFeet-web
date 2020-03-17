import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  form {
    background: #fff;
    height: 460px;
    padding: 30px;
    display: flex;
    flex-direction: column;

    p {
      font-weight: bold;
    }

    span {
      font-weight: bold;
      color: red;
      font-size: 12px;
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
  span {
    color: #fff;
    font-size: 16px;
  }
  .butoes {
    display: flex;
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
