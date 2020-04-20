/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import * as S from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <S.Label htmlFor={fieldName}>
        {label}
        <S.Input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        {error && <span className="error">{error}</span>}
      </S.Label>
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
