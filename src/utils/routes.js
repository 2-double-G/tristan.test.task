import { Main } from '../pages/main/Main';
import { CartPage } from '../pages/cart/CartPage';
import { Checkout } from '../pages/checkout/Checkout';

export const ROUTES = [
  { id: 0, path: '/', exact: true, element: <Main /> },
  { id: 0, path: '/cart', exact: true, element: <CartPage /> },
  { id: 1, path: '/checkout', exact: true, element: <Checkout /> }
];
