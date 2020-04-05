import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import Menu from '~/components/Menu';
import Modal from '~/components/Modal';
import Button from '~/components/RegisterButton';
import Update from './Update';

import * as S from './styles';

export default function Recipients() {
  const [content, setContent] = useState([]);
  const [option, setOption] = useState('');
  const [open, setOpen] = useState(false);
  const [recipients, setRecipients] = useState([]);

  const loadRecipients = async () => {
    const response = await api.get('recipients');

    setRecipients(response.data);
  };

  useEffect(() => {
    loadRecipients();
  }, []);

  const handleOpen = (data, type) => {
    setContent(data);

    setOption(type);
    setOpen(current => !current);
  };

  const handleDelete = async () => {
    const confirmation = window.confirm(
      'Tem certeza que deseja excluir esse destinatário?'
    );

    if (confirmation) {
      try {
        await api.delete(`recipients/${content.id}`);

        setOpen(current => !current);
        loadRecipients();
        return toast.success('Destinarário excluido com sucesso');
      } catch (error) {
        setOpen(current => !current);
        return toast.error(
          'Esse destinatário tem entregas pendentes, por favor atualize o destinatário dessas entregas antes de excluir.'
        );
      }
    }

    return setOpen(current => !current);
  };

  const modalOption = () => {
    if (option === 'view') {
      return (
        <>
          <S.Header>INFORMAÇÕES DO DESTINÁTARIO</S.Header>
          <S.Box>
            <S.Strong>
              Nome: <S.Span>{content.recipient_name}</S.Span>
            </S.Strong>

            <S.Strong>
              Endereço:{' '}
              <S.Span>
                {content.street}, {content.number}, {content.city} -{' '}
                {content.state}
              </S.Span>
            </S.Strong>

            <S.Strong>
              Complemento:{' '}
              <S.Span>{content.complement ? content.complement : 'S/C'}</S.Span>
            </S.Strong>

            <S.Strong>
              CEP: <S.Span>{content.postal_code}</S.Span>
            </S.Strong>
          </S.Box>
        </>
      );
    }
    if (option === 'update') {
      return (
        <Update content={content} setOpen={setOpen} reload={loadRecipients} />
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

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <S.Content>{modalOption()}</S.Content>
      </Modal>
      <S.Title>Gerenciando entregadores</S.Title>
      <S.Container>
        <S.FuncBar>
          <S.Input />
          <Button route="recipient" />
        </S.FuncBar>
        <S.Table>
          <S.HeadRow>
            <S.Head>ID</S.Head>
            <S.Head>Nome</S.Head>
            <S.Head>Endereço</S.Head>
            <S.Head>Ações</S.Head>
          </S.HeadRow>
          {recipients.message ? (
            <S.Row>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item></S.Item>
              <S.Item>
                <Menu view />
              </S.Item>
            </S.Row>
          ) : (
            recipients.map(recipient => (
              <S.Row>
                <S.Item>{recipient.id}</S.Item>
                <S.Item>{recipient.recipient_name}</S.Item>
                <S.Item>
                  {recipient.street}, {recipient.number}, {recipient.city} -
                  {recipient.state}
                </S.Item>
                <S.Item>
                  <Menu view setOpen={type => handleOpen(recipient, type)} />
                </S.Item>
              </S.Row>
            ))
          )}
        </S.Table>
      </S.Container>
    </>
  );
}
