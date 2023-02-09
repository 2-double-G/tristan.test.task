import styled from 'styled-components';

export const StyledAds = styled.div`
  background: #fffbec;
  border: 1px solid #9e9e9e;
  border-radius: 9px;
  padding: 15px 8px;

  h4 {
    font-family: 'Neue Haas Unica Bold Pro';
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    margin-bottom: 13px;
  }

  img {
    display: block;
    max-width: calc(50% - 17px);

    @media (max-width: 425px) {
      width: 130px;
      max-width: unset;
    }
  }

  p {
    margin-bottom: 11px;
    max-width: 152px;
  }

  s {
    color: rgba(0, 0, 0, 0.6);
    text-decoration-thickness: 1px;
  }

  b {
    display: inline-block;
    margin-right: 13px;
    font-family: 'Neue Haas Unica Light Pro';
  }

  b,
  s {
    &::before {
      content: '$';
    }
  }
`;

export const AdsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const AdsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50%;

  @media (max-width: 425px) {
    width: 100%;

    p {
      width: 100%;
      max-width: unset;
    }
  }
`;

export const AdsButtonWrpr = styled.div`
  display: flex;
  width: 50%;
  margin-left: auto;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ContainerShape = styled.button`
  background-color: black;
  border: none;
  border-right: none;
  height: 35px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 34px;
  font-family: 'Neue Haas Unica Regular Pro';
  width: 120px;
  border-radius: 2px;

  position: relative;

  &::after {
    content: '';
    background-color: black;
    transform: rotate(45deg);
    width: 25px;
    height: 25.5px;
    position: absolute;
    top: 5px;
    right: -11px;
    border-radius: 2px;
  }
`;

export const InnerButton = styled(ContainerShape)`
  position: absolute;
  top: 2px;
  left: 2px;
  height: 31px;
  background-color: white;
  width: 116px;

  &::after {
    top: 3.8px;
    background-color: white;
    width: 22.5px;
    height: 23.5px;
    right: -10px;
  }
`;

export const ArrowButton = styled.div`
  position: relative;
`;
