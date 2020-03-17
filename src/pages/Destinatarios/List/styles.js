import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    color: #444444;

    input {
      width: 200px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 6px;
    }
  }

  strong {
    font-size: 24px;
    font-weight: bold;
  }

  img {
    vertical-align: middle;
    margin-right: 6px;
    border-radius: 20px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    text-align: center;
  }

  th {
    font-weight: bold;
    font-size: 16px;
    color: #444444;
  }

  td {
    color: #444444;
    background: #fff;
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    padding-top: 15px;
  }

  .dropbtn {
    background-color: #ffffff;
    color: #999999;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 97px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border: 1px solid #b3b3b3;
  }

  .dropdown-content svg {
    margin-right: 5px;
  }
  .dropdown-content button {
    background-color: #ffffff;
    border: none;
    color: black;
    padding: 6px 13px;
    text-decoration: none;
    display: block;
    font-size: 16px;
  }

  .dropdown-content a {
    color: black;
    padding: 6px 16px;
    text-decoration: none;
    display: block;
    border-bottom: 1px solid #b3b3b3;
  }

  .dropdown-content a:hover {
    background-color: #dadada;
  }
  .dropdown-content button:hover {
    background-color: #dadada;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export const Funcoes = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 130px;
  }
`;
