import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { useEffect, useMemo } from 'react';
import { ModalContainer, ModalContent } from './Modal.styles';

export const Modal = ({ show, children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return (
    show &&
    ReactDOM.createPortal(
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>,
      el
    )
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
};
