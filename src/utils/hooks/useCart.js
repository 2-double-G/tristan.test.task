import { useContext, useMemo } from 'react';
import { StoreContext } from '../../components/Store/StoreContext';

export const useCart = ({ shipping }) => {
  const {
    dispatch,
    state: {
      cart: cartData,
      enableEnterPromoCodes,
      inputCode,
      selectedCodes,
      promoCodes
    }
  } = useContext(StoreContext);
  const subtotal = useMemo(
    () => cartData?.reduce((sum, { price, count }) => sum + price * count, 0),
    [cartData]
  );

  const onAddCartItem = (id) => {
    const newCartData = cartData.map((item) => ({
      ...item,
      count: item.id === id ? item.count + 1 : item.count
    }));

    dispatch({ cart: newCartData });
  };

  const onRemoveCartItem = (id) => {
    let noItems = false;

    const newCartData = cartData.map((item) => {
      const count = item.id === id ? item.count - 1 : item.count;

      if (item.id === id && count === 0) {
        noItems = true;
      }

      return {
        ...item,
        count: item.id === id && count !== 0 ? item.count - 1 : item.count
      };
    });

    if (noItems) {
      dispatch({ cart: newCartData?.filter((item) => item.id !== id) });
    } else dispatch({ cart: newCartData });
  };

  const handleShowPromoCodeInput = (e) => {
    e.preventDefault();
    dispatch({ enableEnterPromoCodes: true });
  };

  const handleInputCode = ({ target: { value } }) => {
    dispatch({ inputCode: value?.trim() });
  };

  const handleApplyCode = () => {
    const newCodes = [...selectedCodes, inputCode];
    inputCode && dispatch({ selectedCodes: newCodes, inputCode: '' });
  };

  const handleRemovePromoCode = (code) => {
    const newCodes = selectedCodes?.filter((item) => item !== code);
    dispatch({ selectedCodes: newCodes });
  };

  const handleDeleteItem = (id) => {
    const newCartData = cartData.filter((item) => item.id !== id);

    dispatch({ cart: newCartData });
  };

  const discount = useMemo(
    () =>
      promoCodes.reduce((sum, { name, value }) => {
        if (selectedCodes?.includes(name)) sum += value;
        return sum;
      }, 0),
    [selectedCodes]
  );

  const total = subtotal + Number(shipping) - discount;

  return {
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
    handleRemovePromoCode,
    handleDeleteItem
  };
};
