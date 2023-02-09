import PropTypes from 'prop-types';
import { StyledLayout } from './Layout.styles';

export const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

Layout.propTypes = {
  children: PropTypes.node
};
