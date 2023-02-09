import PropTypes from 'prop-types';
import React from 'react';
import { ModalContainer, ModalContent } from './Modal.styles';

export const Modal = ({ show, children }) => {
  return (
    show && (
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    )
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
};
