import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import axios from 'axios';
import formatCep from '~/util/cepMask';

import * as S from './styles';
import api from '~/services/api';

import UpdateButton from '~/components/UpdateButton';

export default function Update({ content, setOpen, reload }) {
  const [info, setInfo] = useState([]);
  const [cep, setCep] = useState('');
  const [unique, setUnique] = useState(true);
  const [error, setError] = useState([
    {
      cep: true,
      number: false,
      street: false,
    },
  ]);

  const formRef = useRef(null);

  useEffect(() => {
    setInfo({ ...content, formattedCep: formatCep(content.postal_code) });
    setCep(formatCep(content.postal_code));
  }, [content]);

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

      setInfo({
        ...info,
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
      cep: Yup.string().required('Por favor informar o novo CEP.'),
      number: Yup.string().required('Por favor informar o número.'),
      street: Yup.string().required('Por favor informar o nome da rua.'),
    });

    try {
      console.tron.log(data);

      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.put(`recipients/${info.id}`, {
        postalCode: cep.slice(0, 5) + cep.slice(6, 9),
        name: data.name,
        number: data.number,
        complement: data.complement,
        street: data.street,
      });

      toast.success('Destinatário atualizado com sucesso');
      reload();
      return setOpen(current => !current);
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
      });
    }
  };

  return (
    <>
      <S.Header>Atualizar endereço</S.Header>
      <S.Container>
        <Form ref={formRef} onSubmit={e => handleSubmit(e)}>
          <S.Input
            type="text"
            name="name"
            label="Nome"
            defaultValue={info.recipient_name}
          />

          <S.Input
            type="text/number"
            error={error.cep}
            onChange={e => handleGetCep(e.target.value)}
            value={cep}
            name="cep"
            label="CEP"
            maxLength="9"
          />

          <S.Input
            type="text"
            disabled={unique}
            error={error.street}
            onChange={e =>
              setError({ street: false }) && setInfo({ street: e.target.value })
            }
            defaultValue={info.street}
            name="street"
            label="Rua"
          />
          <S.Input
            type="text"
            defaultValue={info.number}
            name="number"
            onChange={e =>
              setError({ number: false }) && setInfo({ street: e.target.value })
            }
            error={error.number}
            label="Número"
          />
          <S.Input
            type="text"
            defaultValue={info.complement}
            name="complement"
            label="Complemento"
          />

          <S.Input
            type="text"
            disabled
            defaultValue={info.city}
            name="city"
            label="Cidade"
          />
          <S.Input
            type="text"
            disabled
            defaultValue={info.state}
            name="state"
            label="UF"
          />

          <UpdateButton text="ATUALIZAR" />
        </Form>
      </S.Container>
    </>
  );
}
