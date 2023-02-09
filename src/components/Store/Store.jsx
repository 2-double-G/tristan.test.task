import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import { StoreContext } from './StoreContext';
import { reducer } from '../../store/reducer';
import { initialState } from '../../store/initialState';

export const Store = ({ children }) => {
  const [state, _dispatch] = useReducer(reducer, initialState);

  const dispatch = (action) => {
    if (typeof action === 'function') {
      action(_dispatch);
    } else {
      _dispatch(() => action);
    }
  };

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node
};
