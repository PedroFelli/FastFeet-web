import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonWrapper = styled.button`
  background: ${props => props.color};
  height: 45px;
  border: 0;
  color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => darken(0.03, props.color)};
  }

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      color: #fff;
      font-size: 20px;
    }
  }

  span {
    color: #fff;
    flex: 1;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    margin: 0 12px;
  }
`;
