import React from 'react';
import { Layout } from './src/components/Layout/Layout';
import { Store } from './src/components/Store/Store';
import { FontStyles } from './src/styles/fontStyles';

import './src/styles/fonts.css';
import './src/styles/reset.css';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <Store>
      <FontStyles />
      <Layout {...props}>{element}</Layout>
    </Store>
  );
};
