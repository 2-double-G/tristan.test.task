import PropTypes from 'prop-types';
import codes from 'country-calling-code';
import React, { useState } from 'react';
import {
  Container,
  OptionsContainer,
  SelectButton,
  Option,
  Label
} from './SelectCountry.styles';
import Arrow from '../../assets/images/arrow.svg';

export const SelectCountry = ({ name, label }) => {
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
      <Label htmlFor={name}>{label}</Label>
      <SelectButton onClick={toggleOptions}>
        {selectedOption.country}
        <img src={Arrow} />
      </SelectButton>
      <OptionsContainer showOptions={showOptions}>
        {codes.map((option) => (
          <Option key={option.isoCode2} onClick={() => selectOption(option)}>
            {option.country}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};

SelectCountry.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
