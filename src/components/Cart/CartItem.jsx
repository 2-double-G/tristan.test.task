import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { XButton } from '../RemoveButton/XButton';
import {
  CartItemCountButton,
  CartItemFooter,
  CartItemHeader,
  StyledButtonWrpr,
  StyledCartItem,
  CartItemContentWrpr
} from './Cart.styles';

/**
 * This is a component that displays a cart item
 *
 * @param {number} id - Cart item id
 * @param {string} img - Cart item image
 * @param {number} count - Count of the cart item
 * @param {number} price - Price of the cart item
 * @param {string} title - Name of the cart item
 * @param {bool} showRemoveButton - To show remove button for cart item
 * @param {function} addItem - Callback function when click on "+" button
 * @param {function} removeItem - Callback function when click on "-" button
 * @param {function} onDeleteItem - Callback function when click on "x" button
 */

export const CartItem = memo(
  ({
    id,
    img,
    count,
    price,
    title,
    showRemoveButton,
    addItem,
    removeItem,
    onDeleteItem
  }) => {
    const handleAddItem = () => addItem(id);
    const handleRemoveItem = () => removeItem(id);
    const handleDeleteItem = () => onDeleteItem(id);

    return (
      <StyledCartItem>
        {showRemoveButton && (
          <StyledButtonWrpr>
            <XButton size={30} onClick={handleDeleteItem} />
          </StyledButtonWrpr>
        )}
        <div>
          <img src={img} alt={title} />
        </div>
        <CartItemContentWrpr>
          <CartItemHeader>
            <p>{title}</p>
          </CartItemHeader>
          <CartItemFooter>
            <CartItemCountButton>
              <button onClick={handleRemoveItem}>-</button>
              <span>{count}</span>
              <button onClick={handleAddItem}>+</button>
            </CartItemCountButton>
            <div>{price?.toFixed(2)}</div>
          </CartItemFooter>
        </CartItemContentWrpr>
      </StyledCartItem>
    );
  }
);

CartItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  showRemoveButton: PropTypes.bool,
  onDeleteItem: PropTypes.func.isRequired
};
