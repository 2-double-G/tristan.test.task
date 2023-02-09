import { useContext } from 'react';
import { StoreContext } from '../Store/StoreContext';
import { StyledMenuButton } from './MenuButton.styles';

export const MenuButton = () => {
  const { dispatch } = useContext(StoreContext);

  const handleToggle = () =>
    dispatch({ showMenu: true, enableEnterPromoCodes: false });

  return <StyledMenuButton onClick={handleToggle}>cart</StyledMenuButton>;
};
