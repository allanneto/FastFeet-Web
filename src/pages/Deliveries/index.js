import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as S from './styles';

import Modal from '~/components/Modal';
import Menu from '~/components/Menu';
import RegisterButton from '~/components/RegisterButton';

import FormatCep from '~/util/cepMask';
import FormatDate from '~/util/formatDate';

import api from '~/services/api';

export default function Deliveries() {
  const [content, setContent] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState('');

  const loadDeliveries = async () => {
    const response = await api.get('delivery');

    const defineStatus = (start_date, end_date, canceled_at) => {
      if (canceled_at !== null) {
        return 'CANCELADO';
      }
      if (end_date !== null) {
        return 'ENTREGUE';
      }

      if (start_date !== null && canceled_at === null) {
        return 'RETIRADO';
      }

      return 'PENDENTE';
    };

    const data = response.data.map(delivery => ({
      ...delivery,
      status: defineStatus(
        delivery.start_date,
        delivery.end_date,
        delivery.canceled_at
      ),
    }));

    setDeliveries(data);
  };

  useEffect(() => {
    loadDeliveries();
  }, []);

  const verifyStatus = status => {
    switch (status) {
      case 'ENTREGUE':
        return (
          <S.Status1>
            <div />
            ENTREGUE
          </S.Status1>
        );
      case 'RETIRADO':
        return (
          <S.Status3>
            <div />
            RETIRADA
          </S.Status3>
        );
      case 'CANCELADO':
        return (
          <S.Status4>
            <div />
            CANCELADO
          </S.Status4>
        );
      default:
        return (
          <S.Status2>
            <div />
            PENDENTE
          </S.Status2>
        );
    }
  };

  const handleOpen = (data, type) => {
    setContent({
      ...data,
      formattedCep: FormatCep(data.recipient.postal_code),
      start_date: FormatDate(data.start_date),
      end_date: FormatDate(data.end_date),
    });

    setOption(type);
    setOpen(current => !current);
  };

  const handleDelete = async () => {
    const confirmation = window.confirm(
      `Tem certeza que deseja excluir a entrega: ${content.id}`
    );

    if (confirmation) {
      await api.delete(`problem/${content.id}/delete-delivery`);

      setOpen(current => !current);
      loadDeliveries();
      return toast.success('A entrega foi excluida');
    }
  };

  const modalOption = () => {
    if (option === 'view') {
      return (
        <>
          <S.Box>
            <S.Strong>Informações da encomenda</S.Strong>
            <S.Span>
              {content.recipient.street} - {content.recipient.number}
            </S.Span>
            <S.Span>
              {content.recipient.city} - {content.recipient.state}
            </S.Span>
            <S.Span>{content.formattedCep}</S.Span>
          </S.Box>
          <S.Box>
            <S.Strong>Datas</S.Strong>
            <S.HBox>
              <S.Strong>Retirada: </S.Strong>
              <S.Span>{content.start_date}</S.Span>
            </S.HBox>
            <S.HBox>
              <S.Strong>Entrega: </S.Strong>
              <S.Span>{content.end_date}</S.Span>
            </S.HBox>
            <S.Strong>Assinatura do destinatário</S.Strong>
            <S.Signature
              src={
                content.signature.url ||
                'https://upload.wikimedia.org/wikipedia/commons/e/ed/Item_sem_imagem.svg'
              }
              alt="Assinatura"
            ></S.Signature>
          </S.Box>
        </>
      );
    }
    if (option === 'update') {
      return <S.Strong>Fenexz BURRO</S.Strong>;
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
      <S.Title>Gerenciando encomendas</S.Title>
      <S.Container>
        <S.FuncBar>
          <S.Input />
          <RegisterButton route="delivery" />
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
            {deliveries.map(delivery => (
              <S.Row>
                <S.Item>{delivery.id}</S.Item>
                <S.Item>{delivery.recipient.recipient_name}</S.Item>
                <S.Item>{delivery.courier.name}</S.Item>
                <S.Item>{delivery.recipient.city}</S.Item>
                <S.Item>{delivery.recipient.state}</S.Item>
                <S.Item>{verifyStatus(delivery.status)}</S.Item>
                <S.Item>
                  <Menu view setOpen={type => handleOpen(delivery, type)} />
                </S.Item>
              </S.Row>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </>
  );
}
