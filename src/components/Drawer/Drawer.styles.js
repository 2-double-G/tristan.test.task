import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledSideBarWrpr = styled.div`
  height: 100%;
  position: relative;
`;

export const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 375px;
  width: 100%;
  background-color: white;
  z-index: 200;

  transform: ${({ show }) => `translateX(${show ? 0 : '100%'})`};
  transition: transform 0.3s ease-out;

  overflow-y: scroll;
`;
