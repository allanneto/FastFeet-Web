import React from 'react';
import PropTypes from 'prop-types';

import history from '~/services/history';

import * as S from './styles';

export default function Button({ route }) {
  return (
    <S.AddButton onClick={() => history.push(`/create/${route}`)}>
      <S.Icon />
      CADASTRAR
    </S.AddButton>
  );
}

Button.propTypes = {
  // eslint-disable-next-line react/require-default-props
  route: PropTypes.string,
};
