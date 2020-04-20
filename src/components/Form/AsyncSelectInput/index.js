/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import * as S from './styles';

export default function Select({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <S.Label htmlFor={fieldName}>
      {label}
      <S.Select
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
    </S.Label>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
