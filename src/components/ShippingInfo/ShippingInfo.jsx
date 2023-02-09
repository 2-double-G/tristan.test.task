import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from '../Modal/Modal';
import { ModalFooter, ModalHeader, StyledContent } from './ShippingInfo.styles';

export const ShippingInfo = ({ onClose, show }) => (
  <Modal show={show}>
    <ModalHeader>Shipping Info</ModalHeader>
    <StyledContent>
      <ul>
        <li>
          <h4>Free Shipping</h4>
          <p>Delivery 2-5 working days after dispatch</p>
        </li>
        <li>
          <h4>Standard Shipping</h4>
          <p>Delivery 6-10 working days after dispatch</p>
        </li>
        <li>
          <h4>Express Shipping</h4>
          <p>Delivery 2-5 working days after dispatch</p>
        </li>
      </ul>
    </StyledContent>
    <ModalFooter>
      <button onClick={onClose}>Close</button>
    </ModalFooter>
  </Modal>
);

ShippingInfo.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};
