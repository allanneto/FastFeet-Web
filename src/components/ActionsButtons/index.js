import React from 'react';
import history from '~/services/history';
import * as S from './styles';

export default function SaveButton() {
  const handleReturn = () => {
    history.goBack();
  };

  return (
    <S.Container>
      <S.ReturnButton onClick={handleReturn}>
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
