import PropTypes from 'prop-types';
import {
  PromoCodeApplyButton,
  PromoCodeEnterButton,
  StyledPromoCodeWrpr,
  PromoCodeInput,
  StyledPromoCode,
  StyledCodes
} from './PromoCode.styles';
import { promoCode } from './constants';
import { XButton } from '../RemoveButton/XButton';

/**
 * This is a component that displays promo codes and input control to type it
 *
 * @param {array[string]} codes - Selected promo codes
 * @param {bool} enableEnterCode - To show input control for promo code
 * @param {string} inputCode - Typed promo code in input control
 * @param {function} onEnter - Callback function when click on "Enter code" button
 * @param {function} onApply - Callback function when click on "Apply" button
 * @param {function} onRemove - Callback function when click on "x" in promo code item
 * @param {function} onInputCode - Callback function on type in input
 */

export const PromoCode = ({
  onEnter,
  onRemove,
  codes,
  enableEnterCode,
  onApply,
  onInputCode,
  inputCode
}) => {
  return (
    <StyledPromoCode>
      <StyledPromoCodeWrpr>
        {enableEnterCode ? (
          <>
            <PromoCodeInput
              name="promoCode"
              placeholder={promoCode.placeholder}
              onChange={onInputCode}
              value={inputCode}
            />
            <PromoCodeApplyButton onClick={onApply}>
              {promoCode.applyButton}
            </PromoCodeApplyButton>
          </>
        ) : (
          <div>
            <span>{promoCode.title}</span>
            <PromoCodeEnterButton onClick={onEnter}>
              {promoCode.enterButton}
            </PromoCodeEnterButton>
          </div>
        )}
      </StyledPromoCodeWrpr>
      <StyledCodes>
        {codes?.map((item, index) => (
          <li key={item}>
            <span>{item}</span>
            <XButton
              size={20}
              isLast={codes?.length === index + 1}
              onClick={() => onRemove(item)}
            />
          </li>
        ))}
      </StyledCodes>
    </StyledPromoCode>
  );
};

PromoCode.propTypes = {
  codes: PropTypes.array.isRequired,
  onEnter: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onInputCode: PropTypes.func.isRequired,
  enableEnterCode: PropTypes.bool,
  inputCode: PropTypes.string
};
