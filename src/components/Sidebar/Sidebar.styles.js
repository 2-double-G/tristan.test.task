import styled from 'styled-components';

export const SidebarWrpr = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100%;

  h2 {
    font-family: 'Cooper Lt BT';
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    text-align: center;
    margin-bottom: 27px;
  }
`;

export const SidebarHeaderWrpr = styled.div`
  position: relative;
`;

export const SidebarCloseButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  font-family: 'Neue Haas Unica Ultra Light Pro';
  font-weight: 300;
  font-size: 50px;
  line-height: 25px;

  position: absolute;
  left: 21px;
  top: 10px;
  transform: rotate(45deg);
`;

export const AdsWrpr = styled.div`
  padding: 0 11px;
`;

export const SidebarFooter = styled.div`
  padding: 20px 21px 0;
  margin-top: auto;
`;

export const EmptyCart = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  font-family: 'Neue Haas Unica Ultra Light Pro';
  padding: 0 72px 0 67px;
`;

export const CheckoutButtonWrapper = styled.div`
  margin-bottom: 40px;
`;
