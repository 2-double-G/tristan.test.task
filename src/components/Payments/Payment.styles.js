import styled from 'styled-components';

export const StyledPayments = styled.ul`
  background: #f8f8f8;
  border: 1px solid #000000;
  border-radius: 3px;

  li {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 50px;
    font-size: 20px;
    font-family: 'Neue Haas Unica Light Pro';

    &:first-child {
      border-bottom: 1px solid #000000;
    }

    img {
      max-height: 30px;
      margin-right: 20px;
    }
  }
`;
