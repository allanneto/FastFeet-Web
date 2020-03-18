import React from 'react';

import * as S from './styles';

import Menu from '~/components/Menu';
import Button from '~/components/Button';

export default function Deliveries() {
  return (
    <>
      <S.Title>Gerenciando encomendas</S.Title>
      <S.Container>
        <S.FuncBar>
          <S.Input />
          <Button />
        </S.FuncBar>

        <S.Table>
          <tbody>
            <S.HeadRow>
              <S.Head>ID</S.Head>
              <S.Head>Destinatário</S.Head>
              <S.Head>Entregador</S.Head>
              <S.Head>Cidade</S.Head>
              <S.Head>Estado</S.Head>
              <S.Head>Status</S.Head>
              <S.Head>Ações</S.Head>
            </S.HeadRow>
            <S.Row>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>
                {/* {() => {
                switch (status) {
                  case status === 'Entregue':
                    return <Status1>ENTREGUE</Status1>;
                  default:
                    return <span>1</span>;
                }
              }} */}
                <S.Status1>
                  <div />
                  ENTREGUE
                </S.Status1>
              </S.Item>
              <S.Item>
                <Menu view />
              </S.Item>
            </S.Row>
            <S.Row>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>
                <S.Status4>
                  <div />
                  CANCELADA
                </S.Status4>
              </S.Item>
              <S.Item>
                <Menu />
              </S.Item>
            </S.Row>

            <S.Row>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>
                <S.Status3>
                  <div />
                  RETIRADA
                </S.Status3>
              </S.Item>
              <S.Item>
                <Menu />
              </S.Item>
            </S.Row>

            <S.Row>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>1</S.Item>
              <S.Item>
                <S.Status2>
                  <div />
                  PENDENTE
                </S.Status2>
              </S.Item>
              <S.Item>
                <Menu />
              </S.Item>
            </S.Row>
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
}
