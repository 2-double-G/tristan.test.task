import React, { useContext } from 'react';

import { Ads } from '../Ads/Ads';
import { Cart } from '../Cart/Cart';
import { CartTotal } from '../Cart/CartTotal';
import { ArrowButton } from '../ArrowButton/ArrowButton';

import { StoreContext } from '../Store/StoreContext';

import catAds from '../../assets/images/cat-street-hero-olive_2000.png';

import { header, noItems } from './utils/constants';
import { useCart } from '../../utils/hooks/useCart';

import {
  AdsWrpr,
  EmptyCart,
  SidebarWrpr,
  SidebarFooter,
  SidebarHeaderWrpr,
  SidebarCloseButton,
  CheckoutButtonWrapper
} from './Sidebar.styles';
import { ads } from '../CheckoutPage/utils/constants';
import { navigate } from 'gatsby';

export const Sidebar = () => {
  const {
    dispatch,
    state: { inputCode, selectedCodes }
  } = useContext(StoreContext);

  const {
    total,
    subtotal,
    discount,
    cartData,
    enableEnterPromoCodes,
    onAddCartItem,
    onRemoveCartItem,
    handleShowPromoCodeInput,
    handleInputCode,
    handleApplyCode,
    handleRemovePromoCode
  } = useCart({ shipping: 0 });

  const isCartEmpty = !cartData?.length;

  const handleClickCheckout = () => navigate('/checkout');
  const handleCloseSidebar = () => dispatch({ showMenu: false });

  return (
    <SidebarWrpr>
      <SidebarHeaderWrpr>
        <SidebarCloseButton onClick={handleCloseSidebar}>+</SidebarCloseButton>
        <h2>{header}</h2>
      </SidebarHeaderWrpr>
      {isCartEmpty ? (
        <EmptyCart>{noItems}</EmptyCart>
      ) : (
        <>
          <Cart
            cart={cartData}
            addItem={onAddCartItem}
            removeItem={onRemoveCartItem}
            enableEnterCode={enableEnterPromoCodes}
            onEnter={handleShowPromoCodeInput}
            onInputCode={handleInputCode}
            inputCode={inputCode}
            onApply={handleApplyCode}
            codes={selectedCodes}
            onRemove={handleRemovePromoCode}
          />
          <AdsWrpr>
            <Ads
              img={catAds}
              title={ads.title}
              content={ads.content}
              newPrice={122.55}
              oldPrice={129.0}
              onAddItem={() => {}}
            />
          </AdsWrpr>
          <SidebarFooter>
            <CartTotal
              shipping="calculated next step"
              discount={discount}
              subtotal={subtotal}
              total={total}
            />
            <CheckoutButtonWrapper>
              <ArrowButton onClick={handleClickCheckout}>
                Checkout now
              </ArrowButton>
            </CheckoutButtonWrapper>
          </SidebarFooter>
        </>
      )}
    </SidebarWrpr>
  );
};
