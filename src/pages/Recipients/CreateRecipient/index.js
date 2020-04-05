import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import axios from 'axios';
import * as S from './styles';

import api from '~/services/api';
import history from '~/services/history';
import formatCep from '~/util/cepMask';

import ActionsButtons from '~/components/ActionsButtons';

export default function CreateRecipient() {
  const [cep, setCep] = useState('');
  const [unique, setUnique] = useState(true);
  const [recipient, setRecipient] = useState([]);
  const [error, setError] = useState([
    {
      name: false,
      cep: false,
      number: false,
      street: false,
    },
  ]);

  const formRef = useRef(null);

  const handleGetCep = async value => {
    setError({ cep: false });
    setUnique(true);

    const getCep = value;

    setCep(formatCep(getCep));

    if (getCep.length === 9) {
      const response = await axios.get(
        `http://viacep.com.br/ws/${getCep}/json/`
      );

      const { data } = response;

      if (data.erro) {
        return setError({ cep: true });
      }

      setRecipient({
        ...recipient,
        number: '',
        street: data.logradouro,
        city: data.localidade,
        state: data.uf,
        postal_code: getCep,
        formattedCep: cep,
      });

      if (!data.logradouro) {
        setUnique(false);
        setError({
          street: true,
        });
      }
    }
  };

  const handleSubmit = async data => {
    if (error.cep) {
      return toast.error('Por favor inserir um cep válido');
    }

    const schema = Yup.object().shape({
      name: Yup.string().required('Por favor informar o nome do destinatário'),
      cep: Yup.string().required('Por favor informar o novo CEP.'),
      number: Yup.string().required('Por favor informar o número.'),
      street: Yup.string().required('Por favor informar o nome da rua.'),
    });

    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`recipients`, {
        postalCode: cep.slice(0, 5) + cep.slice(6, 9),
        name: data.name,
        number: data.number,
        complement: data.complement,
        street: data.street,
      });

      history.push('/recipients');
      return toast.success('Destinatário criado com sucesso!');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }

      await setError({
        cep: validationErrors.cep,
        number: validationErrors.number,
        street: validationErrors.street,
        name: validationErrors.name,
      });
    }
  };

  return (
    <>
      <S.Title>Cadastro de destinatários</S.Title>
      <S.Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ActionsButtons />
          <S.Box>
            <S.Input
              className="first"
              type="text"
              error={error.name}
              placeholder="Allan Neto"
              name="name"
              label="Nome"
              value={recipient.recipient_name}
            />

            <S.Input
              className="second"
              placeholder="00000-000"
              type="text/number"
              error={error.cep}
              onChange={e => handleGetCep(e.target.value)}
              value={cep}
              name="cep"
              label="CEP"
              maxLength="9"
            />

            <S.Input
              className="second"
              placeholder="São Paulo"
              type="text"
              disabled
              value={recipient.city}
              name="city"
              label="Cidade"
            />

            <S.Input
              className="second"
              placeholder="SP"
              type="text"
              disabled
              value={recipient.state}
              name="state"
              label="UF"
            />

            <S.Input
              className="third"
              placeholder="Rua Jośe Cristovão"
              type="text"
              disabled={unique}
              error={error.street}
              onChange={e =>
                setError({ street: false }) &&
                setRecipient({ street: e.target.value })
              }
              defaultValue={recipient.street}
              name="street"
              label="Rua"
            />

            <S.Input
              className="third"
              placeholder="090"
              type="text"
              name="number"
              onChange={e =>
                setError({ number: false }) &&
                setRecipient({ number: e.target.value })
              }
              error={error.number}
              label="Número"
            />
            <S.Input
              className="third"
              type="text"
              value={recipient.complement}
              name="complement"
              label="Complemento"
            />
          </S.Box>
        </Form>
      </S.Container>
    </>
  );
}
