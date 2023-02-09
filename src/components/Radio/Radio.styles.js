import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px;
  border-bottom: 1px dashed #000000;

  label {
    width: 100%;
  }
`;

export const InputRadio = styled.input`
  margin: 0px 18px 0px 0px;
  width: 24px;

  &[type='radio'] {
    accent-color: black;
  }
`;
