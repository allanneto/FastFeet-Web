import React from 'react';

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
