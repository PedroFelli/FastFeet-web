import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 320px;
  padding: 15px;
  text-align: center;
  background: #ffffff;
  border-radius: 8px;

  -webkit-box-shadow: 8px 8px 11px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 8px 11px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 8px 11px -6px rgba(0, 0, 0, 0.75);

  img {
    height: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: left;

    p {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 14px;
      padding-bottom: 10px;
    }

    input {
      background: #ffffff;
      height: 44px;
      padding: 0 15px;
      color: #888888;
      margin: 0 0 10px;
      border: 1px solid #ccc;
      box-shadow: inset 0 1px 1px #ddd;
      border-radius: 4px;

      &::placeholder {
        color: #888888;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-family: sans-serif;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
