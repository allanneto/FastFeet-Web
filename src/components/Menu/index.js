import React, { useState } from 'react';

import {
  Wrapper,
  Container,
  Pencil,
  Delete,
  Eye,
  Actions,
  Button,
  Li,
} from './styles';

export default function Menu({ view, data, setOpen }) {
  const [hide, setHide] = useState(true);

  const handleSwitch = () => {
    setHide(currrent => !currrent);
  };

  const handleView = type => {
    setOpen(type);
  };

  return (
    <Wrapper>
      <Button onClick={handleSwitch} type="button">
        <Actions />
      </Button>

      <Container onMouseLeave={handleSwitch} view={view} hide={hide}>
        <ul>
          <Li onClick={() => handleView('view')}>
            <Eye />
            Visualizar
          </Li>
          <Li onClick={() => handleView('update')}>
            <Pencil />
            Editar
          </Li>
          <Li onClick={() => handleView('delete')}>
            <Delete />
            Excluir
          </Li>
        </ul>
      </Container>
    </Wrapper>
  );
}
