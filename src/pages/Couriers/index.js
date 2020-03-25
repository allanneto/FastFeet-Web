import React from 'react';

import * as S from './styles';

import Button from '~/components/RegisterButton';
import Menu from '~/components/Menu';

export default function Couriers() {
  // const [hide, setHide] = useState(true);

  return (
    <>
      <S.Title>Gerenciando entregadores</S.Title>
      <S.Container>
        <S.FuncBar>
          <S.Input />
          <Button />
        </S.FuncBar>
        <S.Table>
          <S.HeadRow>
            <S.Head>ID</S.Head>
            <S.Head>Foto</S.Head>
            <S.Head>Nome</S.Head>
            <S.Head>Email</S.Head>
            <S.Head>Ações</S.Head>
          </S.HeadRow>
          <S.Row>
            <S.Item>58</S.Item>
            <S.Item>AN</S.Item>
            <S.Item>allan deivid da silva neto</S.Item>
            <S.Item>allan.costanetinho@gmail.com</S.Item>
            <S.Item>
              <Menu />
            </S.Item>
          </S.Row>
          <S.Row>
            <S.Item>58</S.Item>
            <S.Item>AN</S.Item>
            <S.Item>allan deivid da silva neto</S.Item>
            <S.Item>allan.costanetinho@gmail.com</S.Item>
            <S.Item>
              <Menu />
            </S.Item>
          </S.Row>
          <S.Row>
            <S.Item>58</S.Item>
            <S.Item>AN</S.Item>
            <S.Item>allan deivid da silva neto</S.Item>
            <S.Item>allan.costanetinho@gmail.com</S.Item>
            <S.Item>
              <Menu />
            </S.Item>
          </S.Row>
        </S.Table>
      </S.Container>
    </>
  );
}
