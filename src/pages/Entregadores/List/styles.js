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
    border-radius: 50px;
    height: 50px;
    width: 50px;
  }

  span {
    vertical-align: middle;
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
    padding-bottom: 5px;
    padding-top: 5px;
  }

  .dropbtn {
    background-color: #fff;
    color: #999999;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    text-align: -webkit-left;

    &:hover {
      background: ${darken(0.1, '#fff')};
    }
  }

  button {
    background: white;
    border: none;
    color: black;
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    width: 100%;

    &:hover {
      background: ${darken(0.1, '#fff')};
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export const StatusEntregue = styled.div`
  background: #dff0df;
  color: #2ca42b;
  border-radius: 14px;
  height: 24px;
  display: table-cell;
  vertical-align: middle;
  width: 110;
  padding: 4px;
`;

export const Funcoes = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 120px;
    background: #7d40e7;
    margin: 5px 0 0;
    height: 40px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2;

    &:hover {
      background: ${darken(0.3, '#7d40e7')};
    }
  }
`;
