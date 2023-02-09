import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useEffect, useMemo } from 'react';
import { ModalContainer, ModalContent } from './Modal.styles';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ show, children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  });

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
