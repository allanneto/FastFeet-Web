import React from 'react';

import * as S from './styles';

export default function SaveButton() {
  return (
    <S.Container>
      <S.ReturnButton>
        <S.Box>
          <S.Return />
          VOLTAR
        </S.Box>
      </S.ReturnButton>
      <S.SaveButton>
        <S.Box>
          <S.Check />
          SALVAR
        </S.Box>
      </S.SaveButton>
    </S.Container>
  );
}
