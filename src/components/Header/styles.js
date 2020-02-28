import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  max-width: 1100px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 15px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999999;
      margin-right: 7px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 13px;
      display: block;
      color: #444444;
    }

    button {
      border: none;
      background: none;
      display: block;
      margin-top: 4px;
      font-size: 13px;
      color: #f00;
    }
  }
`;
