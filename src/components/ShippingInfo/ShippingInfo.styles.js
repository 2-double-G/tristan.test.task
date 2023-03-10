import styled from 'styled-components';

export const ModalHeader = styled.header`
  font-size: 40px;
  font-family: 'Neue Haas Unica Regular Pro';
  margin-bottom: 15px !important;
`;

export const StyledContent = styled.main`
  li {
    margin-bottom: 15px !important;

    h4 {
      font-size: 20px;
      font-family: 'Neue Haas Unica Regular Pro';
      margin-bottom: 5px !important;
    }
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: end !important;
  padding-top: 0px !important;

  button {
    height: 40px;
    padding-top: 6px !important;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
    font-family: 'Neue Haas Unica Regular Pro';
    text-transform: uppercase;

    cursor: pointer;
    background: #f1eee9;
    border: 1px solid #a0a0a0;
    border-radius: 4px;
  }
`;
