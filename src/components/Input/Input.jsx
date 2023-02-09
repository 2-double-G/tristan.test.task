import PropTypes from 'prop-types';
import {
  InputContainer,
  InputField,
  Placeholder,
  TextareaField,
  ClearButton
} from './Input.styles';
import { useState } from 'react';

/**
 * This is a component that displays a input control
 *
 * @param {string} name - Input name
 * @param {string} label - Label to display
 * @param {node} elemBefore - Element to display before input
 * @param {string} type - Input type
 * @param {function} onClearInput - Function to clear input
 */

export const Input = ({
  name,
  label,
  elemBefore,
  type,
  onClearInput,
  value,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const isTextarea = type === 'textarea';
  const handleClearInput = (e) => {
    e.preventDefault();
    onClearInput(name);
  };

  return (
    <InputContainer hasElemBefore={!!elemBefore}>
      {elemBefore}
      {isTextarea ? (
        <TextareaField
          name={name}
          value={value}
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => !value && setFocused(false)}
        />
      ) : (
        <InputField
          value={value}
          name={name}
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => !value && setFocused(false)}
        />
      )}
      <Placeholder
        isTextarea={isTextarea}
        focused={focused}
        htmlFor={name}
        hasElemBefore={!!elemBefore}
      >
        {label}
      </Placeholder>
      {onClearInput && (
        <ClearButton onClick={handleClearInput}>change</ClearButton>
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  elemBefore: PropTypes.node,
  onClearInput: PropTypes.func,
  value: PropTypes.string
};
