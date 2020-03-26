import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';

import * as S from './styles';

export default function Update({ content, setOpen, reload }) {
  const schema = Yup.object().shape({
    recipient_id: Yup.string().required(
      'É obrigatório informar o destinatário.'
    ),
    product: Yup.string().required('É obrigatório informar o entregador.'),
    courier_id: Yup.string().required(
      'É obrigatório informar o nome do produto.'
    ),
  });

  const [recipients, setRecipients] = useState([]);
  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const { data } = response;

      setRecipients(
        data.map(recip => ({
          value: recip.id,
          label: recip.recipient_name,
        }))
      );
    }

    async function loadCouriers() {
      const response = await api.get('couriers');

      const { data } = response;

      setCouriers(
        data.map(cour => ({
          value: cour.id,
          label: cour.name,
        }))
      );
    }

    loadRecipients();
    loadCouriers();
  }, []);

  const handleSubmit = async data => {
    const { recipient, courier } = data;

    const confirmation = window.confirm(
      'Deseja confirmar as alterações feitas?'
    );

    if (!confirmation) {
      return setOpen(current => !current);
    }
    await api.put(`delivery/${content.id}`, {
      recipient_id: recipient,
      courier_id: courier,
    });

    setOpen(current => !current);
    reload();
  };

  return (
    <S.Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <S.Select
          defaultValue={{
            label: content.recipient.recipient_name,
            value: content.recipient.id,
          }}
          name="recipient"
          label="Destinatário"
          options={recipients}
        />
        <S.Select
          defaultValue={{
            label: content.courier.name,
            value: content.courier.id,
          }}
          name="courier"
          label="Entregador"
          options={couriers}
        />
        <S.ConfirmButton>ALTERAR</S.ConfirmButton>
      </Form>
    </S.Container>
  );
}
