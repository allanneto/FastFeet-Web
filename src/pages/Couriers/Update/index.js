/* eslint-disable react/require-default-props */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import UpdateButton from '~/components/UpdateButton';

import * as S from './styles';

export default function Update({ content, setOpen, reload }) {
  const formRef = useRef(null);

  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState([]);

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Inserir um endereço de e-mail válido.'),
  });

  const handleSubmit = async data => {
    if (!data.name) {
      data.name = content.name;
    }

    const avatar_id = content.avatar === null ? null : content.avatar.id;

    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      if (!data.email) {
        const response = await api.put(`couriers`, {
          id: content.id,
          name: data.name,
          avatar_id: avatar !== null ? avatar : avatar_id,
        });

        reload();
        return setOpen(current => !current);
      }

      const response = await api.put(`couriers`, {
        id: content.id,
        name: data.name,
        email: data.email,
        avatar_id: avatar !== null ? avatar : avatar_id,
      });

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
        nome: validationErrors.name,
        email: validationErrors.email,
      });

      console.tron.log(error);
    }
  };

  return (
    <S.Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <S.Avatar name="avatar_id" setAvatar={setAvatar} />
        <S.Input
          type="text"
          placeholder={content.name}
          name="name"
          label="Nome do Entregador"
        />
        <S.Input
          type="text"
          placeholder={content.email}
          name="email"
          label="E-mail"
        />
        <UpdateButton text="ATUALIZAR" />
      </Form>
    </S.Container>
  );
}

Update.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  setOpen: PropTypes.func,
  reload: PropTypes.func,
};
