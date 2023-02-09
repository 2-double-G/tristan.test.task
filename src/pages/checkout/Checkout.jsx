import { useContext, useState } from 'react';

import { Ads } from '../../components/Ads/Ads';
import { Cart } from '../../components/Cart/Cart';
import { Input } from '../../components/Input/Input';
import { Radio } from '../../components/Radio/Radio';
import { CartTotal } from '../../components/Cart/CartTotal';
import { Payments } from '../../components/Payments/Payments';
import { ArrowButton } from '../../components/ArrowButton/ArrowButton';
import { SidebarFooter } from '../../components/Sidebar/Sidebar.styles';
import { ShippingInfo } from '../../components/ShippingInfo/ShippingInfo';
import { SelectCountry } from '../../components/SelectCountry/SelectCountry';
import { SelectDialCode } from '../../components/SelectDialCode/SelectDialCode';

import { StoreContext } from '../../components/Store/StoreContext';

import footerLogo1 from '../../assets/images/footer-logo1.svg';
import footerLogo2 from '../../assets/images/footer-logo2.svg';
import catAds from '../../assets/images/cat-street-hero-olive_2000.webp';
import { ReactComponent as LogoSrc } from '../../assets/images/logo.svg';

import { useCart } from '../../utils/hooks/useCart';
import { paymentOptions, radioOptions } from './utils/constants';

import {
  Col,
  Row,
  RadioWrpr,
  TextareaWrpr,
  ButtonPayWrpr,
  ShippingButton,
  StyledCardWrpr,
  StyledCheckout,
  ShippingButtonWrpr,
  StyledDescription,
  FooterIconsContainer
} from './Checkout.styles';

export const Checkout = () => {
  const {
    state: { inputCode, selectedCodes }
  } = useContext(StoreContext);
  const [values, setValues] = useState({
    address: '',
    shipping: 0,
    phone: null,
    email: '',
    firstName: '',
    lastName: ''
  });
  const [showModal, setShowModal] = useState(false);
  const {
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
  } = useCart({ shipping: values.shipping });

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleHideModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };
  const handleChangeValue = ({
    target: { value, name, scrollHeight, offsetHeight }
  }) => {
    if (name === 'address') {
      const newValue = scrollHeight > offsetHeight ? value.slice(0, -1) : value;
      setValues((prev) => ({ ...prev, [name]: newValue }));
      return;
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleClearValue = (name) =>
    setValues((prev) => ({ ...prev, [name]: '' }));

  return (
    <StyledCheckout>
      <header>
        <LogoSrc width={181} height={52} />
        <h1>Checkout</h1>
        <span />
      </header>
      <main>
        <section>
          <form>
            <fieldset>
              <legend>Your Details</legend>
              <Input
                name="email"
                label="your email"
                type="email"
                value={values.email}
                onChange={handleChangeValue}
              />
              <Row>
                <Col size={5} rightGutter={41}>
                  <Input
                    name="phone"
                    label="mobile phone"
                    type="number"
                    elemBefore={<SelectDialCode />}
                    value={values.phone}
                    onChange={handleChangeValue}
                  />
                </Col>
                <Col>
                  <StyledDescription>
                    <p>
                      Your phone number is required for delivery & shipping
                      updates.
                    </p>
                  </StyledDescription>
                </Col>
              </Row>
              <Row>
                <Col size={5} rightGutter={41}>
                  <Input
                    name="firstName"
                    label="first name"
                    value={values.firstName}
                    onChange={handleChangeValue}
                  />
                </Col>
                <Col size={5}>
                  <Input
                    name="lastName"
                    label="last name"
                    value={values.lastName}
                    onChange={handleChangeValue}
                  />
                </Col>
              </Row>
            </fieldset>
            <fieldset>
              <legend>Delivery Details</legend>
              <Row>
                <Col size={5}>
                  <SelectCountry label="country" />
                </Col>
              </Row>
              <TextareaWrpr>
                <Input
                  type="textarea"
                  name="address"
                  label="delivery address"
                  rows={2}
                  value={values.address}
                  onChange={handleChangeValue}
                  onClearInput={handleClearValue}
                />
              </TextareaWrpr>
              <RadioWrpr>
                <Radio
                  options={radioOptions}
                  name="shipping"
                  selectedValue={values.shipping}
                  onChange={handleChangeValue}
                />
                <ShippingButtonWrpr>
                  <ShippingButton onClick={handleShowModal}>
                    about shipping
                  </ShippingButton>
                </ShippingButtonWrpr>
              </RadioWrpr>
            </fieldset>
            <fieldset>
              <legend>Payment Details</legend>
              <Payments options={paymentOptions} />
            </fieldset>
          </form>
        </section>
        <section>
          <h2>Your Order</h2>
          <StyledCardWrpr>
            <Cart
              cart={cartData}
              addItem={onAddCartItem}
              removeItem={onRemoveCartItem}
              enableEnterCode={enableEnterPromoCodes}
              onEnter={handleShowPromoCodeInput}
              onInputCode={handleInputCode}
              inputCode={inputCode}
              onApply={handleApplyCode}
              codes={selectedCodes}
              onRemove={handleRemovePromoCode}
              showRemoveButton
              onDeleteItem={handleDeleteItem}
            />
            <SidebarFooter>
              <CartTotal
                shipping={Number(values.shipping)}
                discount={discount}
                subtotal={subtotal}
                total={total}
              />
            </SidebarFooter>
          </StyledCardWrpr>
          <ButtonPayWrpr>
            <ArrowButton>Pay now</ArrowButton>
          </ButtonPayWrpr>
          <Ads
            img={catAds}
            title="Only For Cool Cats..."
            content="Add the “Catnip” cover to your order and save 5%"
            newPrice={122.55}
            oldPrice={129.0}
            onAddItem={() => {}}
          />
        </section>
      </main>
      <footer>
        <div>
          <h5>Secured & Encrypted Checkout</h5>
          <FooterIconsContainer>
            <img src={footerLogo1} alt="footer logo 1" />
            <img src={footerLogo2} alt="footer logo 2" />
          </FooterIconsContainer>
        </div>
      </footer>
      <ShippingInfo show={showModal} onClose={handleHideModal} />
    </StyledCheckout>
  );
};
