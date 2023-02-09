import React from 'react';
import payPal from '../../../assets/images/paypal.svg';
import card from '../../../assets/images/card.svg';

import { StyledRadioOption } from '../CheckoutPage.styles';

export const radioOptions = [
  {
    label: (
      <StyledRadioOption>
        <span>Free Shipping</span>
        <span>$0.00</span>
      </StyledRadioOption>
    ),
    value: 0
  },
  {
    label: (
      <StyledRadioOption>
        <span>Standard Shipping</span>
        <span>$10.00</span>
      </StyledRadioOption>
    ),
    value: 10
  },
  {
    label: (
      <StyledRadioOption>
        <span>Express Shipping</span>
        <span>$25.30</span>
      </StyledRadioOption>
    ),
    value: 25.3
  }
];

export const paymentOptions = [
  {
    img: payPal,
    title: 'PayPal'
  },
  {
    img: card,
    title: 'Card'
  }
];

export const ads = {
  title: 'Only For Cool Cats...',
  content: 'Add the “Catnip” cover to your order and save 5%'
};
