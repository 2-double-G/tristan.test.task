import PropTypes from 'prop-types';
import React from 'react';
import { StyledCartTotal, StyledTotal, AUD } from './Cart.styles';

/**
 * This is a component that displays a total cart price
 *
 * @param {number} shipping - Shipping price
 * @param {string} subtotal - Subtotal price
 * @param {number} discount - Discount value
 * @param {number} total - Total price
 */

export const CartTotal = ({ shipping, subtotal, discount, total }) => (
  <StyledCartTotal hasDiscount={!!discount}>
    <li>
      <span>Subtotal</span>
      <span>${subtotal?.toFixed(2)}</span>
    </li>
    <li>
      <span>Shipping</span>
      <span>
        {typeof shipping === 'number' ? '$' : ''}
        {shipping}
      </span>
    </li>
    <li id="discount">
      <span>Discounts</span>
      <span>-${discount?.toFixed(2)}</span>
    </li>
    <StyledTotal>
      <b>Total</b>
      <b>
        <AUD>AUD</AUD> ${total?.toFixed(2)}
      </b>
    </StyledTotal>
  </StyledCartTotal>
);

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  discount: PropTypes.number,
  shipping: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
