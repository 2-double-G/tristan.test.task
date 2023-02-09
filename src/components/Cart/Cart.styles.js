import styled from 'styled-components';

export const StyledCart = styled.ul`
  padding-left: 14px;
  padding-right: 12px;
  max-width: 375px;
  width: 100%;
`;

export const StyledCartContainer = styled.ul`
  margin-bottom: 27px;
`;

export const StyledCartItem = styled.li`
  border-bottom: 0.5px dashed #000000;
  padding: 14px 9px 15px 4px;

  max-width: 375px;
  min-height: 118px;
  width: 100%;

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    max-width: 98px;
    width: 100%;
    display: block;
  }

  p {
    font-family: 'Neue Haas Unica Ultra Light Pro';
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    max-width: 206px;
    margin-bottom: 21px;
  }

  @media (max-width: 425px) {
    align-items: center;
    flex-direction: column;

    p {
      max-width: unset;
    }
  }
`;

export const CartItemContentWrpr = styled.div`
  @media (max-width: 425px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const CartItemHeader = styled.div`
  position: relative;
`;

export const StyledButtonWrpr = styled.div`
  position: absolute;
  top: 13px;
  right: -11px;
`;

export const CartItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Neue Haas Unica Light Pro';
`;

export const CartItemCountButton = styled.div`
  display: flex;
  height: 22px;
  border-radius: 3px;
  border: 0.5px solid black;

  span {
    width: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0.5px solid #afafaf;
    border-right: 0.5px solid #afafaf;
    font-weight: 400;
    font-size: 15px;
    line-height: 13px;
    padding-top: 4px;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: 'Neue Haas Unica Ultra Light Pro';
    font-size: 20px;
    line-height: 22px;

    &:first-child {
      width: 23px;
    }

    &:last-child {
      width: 24px;
    }
  }
`;

export const CartItemPrice = styled.div`
  font-size: 18px;
  line-height: 13px;
`;

export const StyledCartTotal = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 27px;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    span:last-child {
      font-family: 'Neue Haas Unica Light Pro';
    }
  }

  ${({ hasDiscount }) =>
    !hasDiscount &&
    `
      #discount {
      visibility: hidden;
  }
  `}
`;

export const StyledTotal = styled.li`
  font-size: 25px;
  line-height: 25px;
  font-family: 'Neue Haas Unica Medium Pro';
  margin-top: 5px;
`;

export const AUD = styled.span`
  color: #939393;
  font-family: 'Neue Haas Unica Regular Pro' !important;
  display: inline-block;
  margin-right: 10px;
`;
