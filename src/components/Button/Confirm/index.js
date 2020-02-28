import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
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
`;

export default Button;
