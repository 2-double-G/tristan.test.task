import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  font-family: 'Neue Haas Unica Ultra Light Pro';
  font-weight: 300;
  font-size: ${({ size }) => `${size}px`};
  line-height: 25px;

  transform: rotate(45deg);
`;
