import React, { useContext } from 'react';
import { Drawer } from '../components/Drawer/Drawer';
import { Header } from '../components/Header/Header';
import { StoreContext } from '../components/Store/StoreContext';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Named = () => {
  const {
    dispatch,
    state: { showMenu }
  } = useContext(StoreContext);

  const handleCloseSidebar = () => dispatch({ showMenu: false, inputCode: '' });

  return (
    <div>
      <Header />
      <Drawer
        show={showMenu}
        close={handleCloseSidebar}
        content={<Sidebar />}
      />
    </div>
  );
};

export default Named;
