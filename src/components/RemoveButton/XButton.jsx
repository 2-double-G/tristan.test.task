import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './XButton.styles';

export const XButton = ({ size, ...props }) => (
  <StyledButton size={size} {...props}>
    +
  </StyledButton>
);

XButton.propTypes = {
  size: PropTypes.number.isRequired
};
