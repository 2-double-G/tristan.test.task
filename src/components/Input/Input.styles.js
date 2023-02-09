import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 53px;
  border-bottom: 1px solid #000000;

  ${({ hasElemBefore }) =>
    hasElemBefore &&
    `
    display: flex;
    align-items: end;
  `}

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  background: transparent;
  outline: none;
  border: none;
  padding: 7px;
  text-indent: 2px;
  font-size: 25px;
  color: #424141;

  &:focus {
    background: white;
  }
`;

export const TextareaField = styled.textarea`
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  padding: 7px;
  text-indent: 2px;
  font-size: 25px;
  color: #424141;
  resize: none;
  font-family: 'Neue Haas Unica Regular Pro' !important;

  &:focus {
    background: white;
  }
`;

export const Placeholder = styled.label`
  position: absolute;
  pointer-events: none;
  left: ${({ hasElemBefore }) => `${hasElemBefore ? 145 : 6}px`};
  margin-top: 6px;
  transition: 0.2s ease all;

  font-size: 25px;
  color: #606060;

  ${({ hasElemBefore }) =>
    hasElemBefore &&
    `
    top: 0;
    transform: translateY(4px);
  `}

  ${({ isTextarea }) =>
    isTextarea &&
    `
    top: 0;
    transform: translateY(40px);
  `}

  ${({ focused }) =>
    focused &&
    `
   cursor: text;
    left: 6px;
    font-size: 20px !important;
    margin-top: 45px !important;
  `}
`;

export const ClearButton = styled.button`
  outline: none;
  border: none;
  text-decoration: underline;
  color: #4b4b4b;
  font-size: 20px;
  line-height: 10px;
  position: absolute;
  bottom: -10px;
  font-family: 'Neue Haas Unica Ultra Light Pro';
  transform: translate(-100%, 100%);
  background: transparent;
  cursor: pointer;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
`;
