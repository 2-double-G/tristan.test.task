import PropTypes from 'prop-types';
import { buttonTitle } from './utils/constants';
import {
  StyledAds,
  AdsContent,
  InnerButton,
  ArrowButton,
  AdsContainer,
  AdsButtonWrpr,
  ContainerShape
} from './Ads.styles';

/**
 * This is a component that displays a ads
 *
 * @param {string} img - The image of ads item to display
 * @param {string} title - The title of the ads
 * @param {string} content - The content of the ads
 * @param {number} newPrice - New price of the item
 * @param {number} oldPrice - old price of the item
 * @param {function} onAddItem - Callback function when click on "Add now" button
 */

export const Ads = ({ img, title, content, newPrice, oldPrice, onAddItem }) => {
  return (
    <StyledAds>
      <h4>{title}</h4>
      <AdsContainer>
        <img src={img} />
        <AdsContent>
          <p>{content}</p>
          <div>
            <b>{newPrice.toFixed(2)}</b>
            <s>{oldPrice.toFixed(2)}</s>
          </div>
        </AdsContent>
      </AdsContainer>
      <AdsButtonWrpr>
        <ArrowButton>
          <ContainerShape onClick={onAddItem}>{buttonTitle}</ContainerShape>
          <InnerButton>{buttonTitle}</InnerButton>
        </ArrowButton>
      </AdsButtonWrpr>
    </StyledAds>
  );
};

Ads.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  onAddItem: PropTypes.func.isRequired
};
