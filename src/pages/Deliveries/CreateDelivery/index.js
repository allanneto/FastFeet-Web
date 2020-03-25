import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import * as S from './styles';

import ActionsButtons from '~/components/ActionsButtons';
import Select from '~/components/Form/AsyncSelectInput';
import Input from '~/components/Form/SimpleInput';

import api from '~/services/api';
import history from '~/services/history';

export default function Create() {
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
    const { recipient, courier, product } = data;

    const schema = Yup.object().shape({
      recipient_id: Yup.string().required(
        'É obrigatório informar o destinatário.'
      ),
      product: Yup.string().required('É obrigatório informar o entregador.'),
      courier_id: Yup.string().required(
        'É obrigatório informar o nome do produto.'
      ),
    });

    const body = { recipient_id: recipient, courier_id: courier, product };

    if (!(await schema.isValid(body))) {
      return toast.error('Por favor preencher todos os campos do formulário.');
    }

    try {
      await api.post('delivery', body);

      history.push('/deliveries');
    } catch (err) {
      toast.error('Por favor preencher os campos corretamente.');
    }
  };

  return (
    <>
      <S.Title>Cadastro de encomendas</S.Title>
      <S.Container>
        <Form onSubmit={e => handleSubmit(e)}>
          <ActionsButtons />
          <S.Box>
            <Select
              name="recipient"
              label="Destinatário"
              options={recipients}
            />
            <Select name="courier" label="Entregador" options={couriers} />
            <Input
              label="Nome do Produto"
              name="product"
              type="text"
              placeholder="Digite o nome do produto"
            />
          </S.Box>
        </Form>
      </S.Container>
    </>
  );
}
