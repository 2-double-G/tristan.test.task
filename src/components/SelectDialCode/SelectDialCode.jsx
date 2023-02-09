import PropTypes from 'prop-types';
import codes from 'country-calling-code';
import React, { useState } from 'react';
import {
  Container,
  OptionsContainer,
  SelectButton,
  Option
} from './SelectDialCode.styles';
import { getCountryFlag } from './utils/getCountryFlag';
import Arrow from '../../assets/images/arrow.svg';

export const SelectDialCode = ({ name, label }) => {
  const [selectedOption, setSelectedOption] = useState(codes[0]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = (e) => {
    e.preventDefault();
    setShowOptions(!showOptions);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <Container>
      <input name={name} />
      <label htmlFor={name}>{label}</label>
      <SelectButton onClick={toggleOptions}>
        <img
          src={getCountryFlag(selectedOption.isoCode3)}
          crossOrigin="anonymous"
          loading="lazy"
        />
        <span>+{selectedOption.countryCodes[0]}</span>
        <img src={Arrow} />
      </SelectButton>
      <OptionsContainer showOptions={showOptions}>
        {codes.map((option) => (
          <Option key={option.isoCode2} onClick={() => selectOption(option)}>
            <img
              src={getCountryFlag(option.isoCode3)}
              crossOrigin="anonymous"
              loading="lazy"
            />
            <span>+{option.countryCodes[0]}</span>
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};

SelectDialCode.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
};
