import { Checkout } from '../pages/checkout/Checkout';
import { Home } from '../pages/home/Home';

export const ROUTES = [
  { id: 0, path: '/', exact: true, element: <Home /> },
  { id: 1, path: '/checkout', exact: true, element: <Checkout /> }
];
