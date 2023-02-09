import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  img {
    width: 24px;
    margin-right: 11px;
  }

  span {
    display: inline-block;
    margin-right: 15px;
  }

  input {
    display: none;
  }
`;

export const SelectButton = styled.button`
  height: 42px;
  max-width: 140px;
  padding: 0px 16px 0px 10px;
  font-family: 'Neue Haas Unica Regular Pro';
  font-size: 20px;
  line-height: 38px;

  color: #424141;

  background: rgba(255, 255, 255, 0.5);
  border: 0.5px solid #9c9c9c;
  border-radius: 2px;

  display: flex;
  align-items: center;

  cursor: pointer;

  span {
    display: flex;
    white-space: nowrap;
  }
`;

export const OptionsContainer = styled.ul`
  background-color: white;
  display: ${(props) => (props.showOptions ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  border: 0.5px solid #9c9c9c;
  border-radius: 2px;
  max-height: 150px;
  overflow-y: scroll;
`;

export const Option = styled.li`
  padding: 10px;
  max-width: 140px;
  display: flex;
  white-space: nowrap;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
