import { cart } from '../mocks/cart';
import { promoCodes } from '../mocks/promoCodes';

export const initialState = {
  showMenu: false,
  cart,
  selectedCodes: [],
  enableEnterPromoCodes: false,
  inputCode: '',
  promoCodes
};
