import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import * as S from './styles';

import ActionsButtons from '~/components/ActionsButtons';
import AvatarInput from '~/components/Form/AvatarInput';

import api from '~/services/api';
import history from '~/services/history';

export default function CreateCourier() {
  const formRef = useRef(null);

  const schema = Yup.object().shape({
    name: Yup.string().required('Por favor informar o nome do entregador.'),
    email: Yup.string()
      .email('Por favor informar um endereço de e-mail válido.')
      .required('Por favor informar o email do entregador.'),
    avatar_id: Yup.number(),
  });

  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState([]);

  const handleSubmit = async data => {
    try {
      console.tron.log(avatar);

      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      console.tron.log(avatar);

      await api.post(`couriers`, {
        ...data,
        avatar_id: avatar,
      });

      return history.push('/couriers');
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }

      await setError({
        nome: validationErrors.name,
        email: validationErrors.email,
      });

      console.tron.log(error);
    }
  };

  return (
    <>
      <S.Title>Cadastro de entregadores</S.Title>
      <S.Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <ActionsButtons />
          <S.Box>
            <AvatarInput name="avatar_id" setAvatar={setAvatar} />
            <S.Input
              label="Nome"
              name="name"
              type="text"
              placeholder="Inserir o nome do entregador"
              error={error.nome}
            />
            <S.Input
              label="Email"
              name="email"
              type="text"
              placeholder="example@rocketseat.com"
              error={error.email}
            />
          </S.Box>
        </Form>
      </S.Container>
    </>
  );
}
