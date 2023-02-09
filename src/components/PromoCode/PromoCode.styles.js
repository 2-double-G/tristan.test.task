import styled from 'styled-components';

export const StyledPromoCode = styled.div`
  padding: 0 5px;
`;

export const StyledPromoCodeWrpr = styled.div`
  display: flex;
  justify-content: ${({ isEditMode }) =>
    isEditMode ? 'space-between' : 'center'};

  margin-bottom: 15px;
`;

export const PromoCodeEnterButton = styled.button`
  color: #777777;
  font-size: 18px;
  line-height: 25px;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  font-family: 'Neue Haas Unica Ultra Light Pro';

  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const PromoCodeApplyButton = styled.button`
  height: 40px;
  padding-top: 6px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  line-height: 30px;
  font-family: 'Neue Haas Unica Regular Pro';
  text-transform: uppercase;

  cursor: pointer;
  background: #f1eee9;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
`;

export const PromoCodeInput = styled.input`
  width: 100%;
  display: block;
  margin-right: 15px;
  padding: 7px 0px;
  border: 1px solid #a0a0a0;
  border-radius: 2px;
  font-size: 18px;
  outline: none;
  text-indent: 5px;

  &::placeholder {
    font-family: 'Neue Haas Unica Ultra Light Pro';
    font-size: 18px;
    line-height: 25px;
  }
`;

export const StyledCodes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  li {
    background: #f1eee9;
    border-radius: 12px;
    font-size: 14px;
    line-height: 25px;
    padding: 3px 30px 0px 9px;
    text-transform: uppercase;
    font-family: 'Neue Haas Unica Light Pro';
    margin-right: ${({ isLast }) => (isLast ? 0 : '9px')};
    margin-bottom: 10px;

    position: relative;

    span {
      max-height: 25px;
    }

    button {
      position: absolute;
      top: 2px;
      font-family: 'Neue Haas Unica Light Pro';
    }
  }
`;
