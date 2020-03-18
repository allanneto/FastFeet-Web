import React from 'react';

import { Container, Logo, NavBar, User, Item } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <NavBar>
        <Item>ENCOMENDAS</Item>
        <Item>ENTREGADORES</Item>
        <Item>DESTINATÁRIOS</Item>
        <Item>PROBLEMAS</Item>
      </NavBar>
      <User>
        <strong>Admin FastFeet</strong>
        <span>sair do sistema</span>
      </User>
    </Container>
  );
}
