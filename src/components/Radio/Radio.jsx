import PropTypes from 'prop-types';
import React from 'react';
import { Container, InputRadio, OptionContainer } from './Radio.styles';

export const Radio = ({ options, name, selectedValue, onChange }) => {
  return (
    <Container>
      {options?.map(({ value, label }) => (
        <OptionContainer key={name} onChange={onChange}>
          <InputRadio
            type="radio"
            name={name}
            id="flexRadioDefault1"
            value={value}
            checked={value == selectedValue}
          />
          <label htmlFor={name}>{label}</label>
        </OptionContainer>
      ))}
    </Container>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.any.isRequired
    })
  ).isRequired,
  selectedValue: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};
