import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as S from './styles';

import Button from '~/components/RegisterButton';
import Menu from '~/components/Menu';
import Modal from '~/components/Modal';
import Update from './Update';

import api from '~/services/api';

export default function Couriers() {
  const [couriers, setCouriers] = useState([]);
  const [content, setContent] = useState([]);
  const [option, setOption] = useState('');
  const [open, setOpen] = useState(false);

  const loadCouriers = async () => {
    const response = await api.get('couriers');

    setCouriers(response.data);
  };

  useEffect(() => {
    loadCouriers();
  }, []);

  const handleDelete = async () => {
    const confirmation = window.confirm(
      `Tem certeza que deseja excluir esse entregador: ${content.id}`
    );

    if (confirmation) {
      try {
        await api.delete(`couriers/${content.id}`);

        setOpen(current => !current);
        loadCouriers();
        return toast.success('Entregador excluido com sucesso!');
      } catch (error) {
        setOpen(current => !current);
        return toast.error(
          'O entregador tem entregas pendentes, por favor redesignar essas entregas antes de esclui-lo!'
        );
      }
    }

    return setOpen(current => !current);
  };

  const modalOption = () => {
    if (option === 'view') {
      return (
        <>
          <S.HBox>
            <S.Avatar
              src={
                content.avatar === null
                  ? 'https://image.flaticon.com/icons/svg/1077/1077114.svg'
                  : content.avatar.url
              }
            />
            <S.Box>
              <S.Strong>Nome:</S.Strong>
              <S.Span>{content.name}</S.Span>
              <S.Strong>E-mail:</S.Strong>
              <S.Span>{content.email}</S.Span>
            </S.Box>
          </S.HBox>
        </>
      );
    }
    if (option === 'update') {
      return (
        <Update content={content} setOpen={setOpen} reload={loadCouriers} />
      );
    }

    if (option === 'delete') {
      return (
        <S.DeleteBox>
          <S.Strong>Confirmar exlcusão</S.Strong>
          <S.DeleteButton onClick={handleDelete}>EXCLUIR</S.DeleteButton>
        </S.DeleteBox>
      );
    }
  };

  const handleOpen = (data, type) => {
    setContent(data);

    setOption(type);
    setOpen(current => !current);
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <S.Content>{modalOption()}</S.Content>
      </Modal>
      <S.Title>Gerenciando entregadores</S.Title>
      <S.Container>
        <S.FuncBar>
          <S.Input />
          <Button route="courier" />
        </S.FuncBar>
        <S.Table>
          <S.HeadRow>
            <S.Head>ID</S.Head>
            <S.Head>Foto</S.Head>
            <S.Head>Nome</S.Head>
            <S.Head>Email</S.Head>
            <S.Head>Ações</S.Head>
          </S.HeadRow>
          {couriers.message ? (
            <S.Row>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item>
                <Menu view />
              </S.Item>
            </S.Row>
          ) : (
            couriers.map(courier => (
              <S.Row>
                <S.Item>{courier.id}</S.Item>
                <S.Item>
                  <S.MiniAvatar
                    src={
                      courier.avatar === null
                        ? 'https://image.flaticon.com/icons/svg/1077/1077114.svg'
                        : courier.avatar.url
                    }
                  />
                </S.Item>
                <S.Item>{courier.name}</S.Item>
                <S.Item>{courier.email}</S.Item>
                <S.Item>
                  <Menu view setOpen={type => handleOpen(courier, type)} />
                </S.Item>
              </S.Row>
            ))
          )}
        </S.Table>
      </S.Container>
    </>
  );
}
