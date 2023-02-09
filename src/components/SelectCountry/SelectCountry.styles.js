import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-bottom: 1px solid #000000;
  margin-bottom: 30px;

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
  width: 100%;
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
  justify-content: space-between;
  cursor: pointer;
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

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all;
  top: 20px;

  color: #606060;

  cursor: text;
  left: 6px;
  font-size: 20px !important;
  margin-top: 27px !important;
`;
