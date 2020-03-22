import styled from 'styled-components';

export const Formulario = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    .inputs {
      background: #fff;
      padding: 30px;
    }

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
