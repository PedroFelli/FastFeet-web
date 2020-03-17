import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonWrapper = styled.button`
  background: ${props => props.color};
  height: 35px;
  width: 95px;
  border: 0;
  color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-left: 10px;

  &:hover {
    background: ${props => darken(0.03, props.color)};
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: #fff;
      font-size: 20px;
    }
  }

  span {
    color: #fff;
    flex: 1;
    text-align: center;
    font-size: 14px;
    line-height: 19px;
    font-weight: bold;
    margin: 0px;
  }
`;
