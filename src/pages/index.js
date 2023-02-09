import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    navigate('/cart');
  }, []);

  return null;
};

export default Main;
