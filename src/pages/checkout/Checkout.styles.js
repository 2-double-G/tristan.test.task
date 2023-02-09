import styled from 'styled-components';

export const StyledCheckout = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(241, 238, 233, 0.16) 0%,
    #f1eee9 100%
  );
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 36px 2rem 100px;

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 160px;

    @media (max-width: 767px) {
      margin-bottom: 100px;
    }

    img {
      display: block;
      max-width: 181px;
    }

    h1 {
      font-family: 'Cooper Lt BT';
      font-size: 60px;
      line-height: 72px;
    }

    span {
      width: 181px;
    }
  }

  main {
    max-width: 1600px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    column-gap: 100px;

    section {
      padding: 10px;

      &:first-child {
        max-width: 710px;
        width: 100%;
      }
      &:last-child {
        max-width: 400px;
        width: 100%;
      }
    }

    h2 {
      font-family: 'Neue Haas Unica Regular Pro';
      font-size: 40px;
      line-height: 60px;
    }

    form {
      legend {
        font-family: 'Neue Haas Unica Regular Pro';
        font-size: 40px;
        line-height: 60px;
        margin-bottom: 16px;

        &:last-of-type {
          margin-bottom: 9px !important;
        }
      }

      p {
        color: #585858;
      }
    }
  }

  footer {
    padding-top: 153px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      padding-top: 100px;
    }

    h5 {
      margin-bottom: 11px;
    }

    img {
      max-height: 74px;
      padding: 0px 15px;
    }
  }
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  column-gap: 39px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  width: 100%;
  justify-content: space-between;
`;

export const Col = styled.div`
  max-width: 300px;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    max-width: unset;
  }
`;

export const StyledRadioOption = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Neue Haas Unica Regular Pro';
  font-size: 25px !important;
  line-height: 38px !important;
  color: #424141;
`;

export const StyledCardWrpr = styled.div`
  background: #ffffff;
  border: 1px solid #9e9e9e;
  border-radius: 9px;
`;

export const StyledDescription = styled.div`
  padding-top: 10px;
  @media (max-width: 767px) {
    padding-top: 0px;
  }
`;

export const TextareaWrpr = styled.div`
  margin-top: 26px;
  margin-bottom: 58px;
  @media (max-width: 767px) {
    margin-top: 0px;
  }
`;

export const ButtonPayWrpr = styled.div`
  margin: 23px 0;
`;

export const ShippingButtonWrpr = styled.div`
  display: flex;
  justify-content: end;
`;

export const ShippingButton = styled.button`
  outline: none;
  border: none;
  text-decoration: underline;
  color: #4b4b4b;
  font-size: 20px;
  line-height: 10px;
  font-family: 'Neue Haas Unica Ultra Light Pro';
  background: transparent;
  cursor: pointer;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
`;

export const RadioWrpr = styled.div`
  margin-bottom: 25px;
`;
