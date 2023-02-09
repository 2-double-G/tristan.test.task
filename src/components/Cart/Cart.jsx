import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { CartItem } from './CartItem';
import { PromoCode } from '../PromoCode/PromoCode';
import { StyledCart, StyledCartContainer } from './Cart.styles';

/**
 * This is a component that displays a cart
 *
 * @param {object} cart - Cart items
 *
 * For CartItem component
 * @param {bool} showRemoveButton - To show remove button for cart item
 * @param {function} addItem - Callback function when click on "+" button
 * @param {function} removeItem - Callback function when click on "-" button
 * @param {function} onDeleteItem - Callback function when click on "x" button
 *
 * For PromoCode component
 * @param {array[string]} codes - Selected promo codes
 * @param {bool} enableEnterCode - To show input control for promo code
 * @param {string} inputCode - Typed promo code in input control
 * @param {function} onEnter - Callback function when click on "Enter code" button
 * @param {function} onApply - Callback function when click on "Apply" button
 * @param {function} onRemove - Callback function when click on "x" in promo code item
 * @param {function} onInputCode - Callback function on type in input
 */

export const Cart = memo(
  ({
    cart,
    onEnter,
    enableEnterCode,
    codes,
    onRemove,
    onApply,
    onInputCode,
    inputCode,
    ...props
  }) => {
    const promoCodeProps = {
      onEnter,
      enableEnterCode,
      codes,
      onRemove,
      onApply,
      onInputCode,
      inputCode
    };
    return (
      <StyledCart>
        <StyledCartContainer>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} {...props} />
          ))}
        </StyledCartContainer>
        <PromoCode {...promoCodeProps} />
      </StyledCart>
    );
  }
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  codes: PropTypes.array.isRequired,
  onEnter: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onInputCode: PropTypes.func.isRequired,
  inputCode: PropTypes.string.isRequired,
  enableEnterCode: PropTypes.bool
};
