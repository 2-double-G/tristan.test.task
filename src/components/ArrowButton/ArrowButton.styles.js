import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: black;
  border: none;
  border-right: none;
  height: 54px;
  outline: none;
  cursor: pointer;
  font-family: 'Neue Haas Unica Regular Pro';
  width: calc(100% - 26px);
  border-radius: 2px;
  color: white;
  font-size: 30px;
  line-height: 45px;

  position: relative;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  &::after {
    content: '';
    background-color: black;
    transform: rotate(45deg);
    width: 40px;
    height: 38px;
    position: absolute;
    top: 8px;
    right: -19px;
    border-radius: 2px;
  }
`;
