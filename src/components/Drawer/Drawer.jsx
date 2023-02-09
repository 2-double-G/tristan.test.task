import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { Backdrop, StyledSideBar } from './Drawer.styles';

/**
 * This is a component that displays a side menu
 *
 * @param {function} close - Callback function on close drawer
 * @param {boolean} show - To open drawer
 * @param {node} content - Content to show inside drawer
 */

export const Drawer = memo(({ close, show, content }) => {
  const [showBackdrop, setShowBackdrop] = useState(show);

  useEffect(() => {
    const showBackdrop = () => setShowBackdrop(true);
    const hideBackdrop = () => setShowBackdrop(false);

    if (!show) window.setTimeout(hideBackdrop, 300);
    else showBackdrop();
  }, [show]);

  return (
    <>
      {showBackdrop && <Backdrop onClick={close} />}
      <StyledSideBar show={show}>{content}</StyledSideBar>
    </>
  );
});

Drawer.propTypes = {
  close: PropTypes.func,
  content: PropTypes.node,
  show: PropTypes.bool
};
