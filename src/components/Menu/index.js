import React, { useState } from 'react';

import { Container, Pencil, Delete, Eye, Actions, Button, Li } from './styles';

export default function Menu({ view }) {
  const [hide, setHide] = useState(true);

  const handleSwitch = () => {
    console.tron.log('foi');
    setHide(currrent => !currrent);
  };

  return (
    <>
      <Button onClick={handleSwitch} type="button">
        <Actions />
        <Container view={view} hide={hide}>
          <ul>
            <Li>
              <Eye />
              Visualizar
            </Li>
            <Li>
              <Pencil />
              Editar
            </Li>
            <Li>
              <Delete />
              Excluir
            </Li>
          </ul>
        </Container>
      </Button>
    </>
  );
}
