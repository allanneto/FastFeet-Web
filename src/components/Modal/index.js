/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Modal({ children, open, setOpen }) {
  const handleClose = () => {
    setOpen(current => !current);
  };

  return (
    open && (
      <S.Container>
        <S.Card>
          {children}
          <S.Icon onClick={handleClose} />
        </S.Card>
      </S.Container>
    )
  );
}

Modal.propTypes = {
  open: PropTypes.func,
  setOpen: PropTypes.func,
  children: PropTypes.element,
};
