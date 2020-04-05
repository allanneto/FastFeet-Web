import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Logo, NavBar, User, Item, SignOutButton } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  const handleNavigate = route => {
    setSelected(route);

    history.push(`/${route}`);
  };

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logo />
      <NavBar>
        <Item
          value="deliveries"
          selected={selected}
          onClick={() => {
            handleNavigate('deliveries');
          }}
        >
          ENCOMENDAS
        </Item>
        <Item
          value="couriers"
          selected={selected}
          onClick={() => {
            handleNavigate('couriers');
          }}
        >
          ENTREGADORES
        </Item>
        <Item
          value="recipients"
          selected={selected}
          onClick={() => {
            handleNavigate('recipients');
          }}
        >
          DESTINATÁRIOS
        </Item>
        <Item
          value="problems"
          selected={selected}
          onClick={() => {
            handleNavigate('problems');
          }}
        >
          PROBLEMAS
        </Item>
      </NavBar>
      <User>
        <strong>Admin FastFeet</strong>
        <SignOutButton onClick={handleSignOut}>sair do sistema</SignOutButton>
      </User>
    </Container>
  );
}
