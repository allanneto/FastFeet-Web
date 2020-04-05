import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content, LogoImg, Info, SubmitButton } from './styles';

import { loginRequest } from '~/store/modules/auth/actions';

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('O e-mail é obrigatório.')
      .required(),
    password: Yup.string()
      .min(6, 'No mínimo 6 caracteres!')
      .required('O password é obrigatório.'),
  });

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  return (
    <>
      <Container>
        <Content>
          <LogoImg />
          <Form schema={schema} onSubmit={handleSubmit}>
            <Info>SEU E-MAIL</Info>
            <Input name="email" type="text" placeholder="exemplo@email.com" />

            <Info>SUA SENHA</Info>
            <Input
              name="password"
              type="password"
              placeholder="Insira a senha"
            />

            <SubmitButton>
              {loading ? 'Carregando...' : 'Entrar no Sistema'}
            </SubmitButton>
          </Form>
        </Content>
      </Container>
    </>
  );
}
