import PropTypes from 'prop-types';
import React from 'react';
import { StyledPayments } from './Payment.styles';

export const Payments = ({ options }) => (
  <StyledPayments>
    {options.map(({ img, title }, index) => (
      <li key={index}>
        <img src={img} /> <p>{title}</p>
      </li>
    ))}
  </StyledPayments>
);

Payments.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};
