import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './ArrowButton.styles';

export const ArrowButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

ArrowButton.propTypes = {
  children: PropTypes.node
};
