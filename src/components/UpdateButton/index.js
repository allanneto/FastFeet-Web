import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function UpdateButton({ text }) {
  return <S.ConfirmButton>{text}</S.ConfirmButton>;
}
UpdateButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string,
};
