import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './styles';
import Modal from '~/components/Modal';
import Menu from '~/components/Menu';

import api from '~/services/api';

export default function Problems() {
  const [option, setOption] = useState('');
  const [content, setContent] = useState([]);
  const [problems, setProblems] = useState([]);
  const [open, setOpen] = useState(false);

  const loadProblems = async () => {
    const response = await api.get('problems');

    console.tron.log(response.data);

    setProblems(response.data);
  };

  useEffect(() => {
    loadProblems();
  }, []);

  const handleDelete = async type => {
    if (type) {
      const confirmation = window.confirm(
        'Tem certeza que deseja cancelar a entrega referente a esse problema?'
      );

      if (confirmation) {
        try {
          await api.get(`delivery/${content.delivery_id}`);
          setOpen(current => !current);
          loadProblems();
          return toast.success('Entrega cancelada com sucesso.');
        } catch (error) {
          setOpen(current => !current);
          return toast.error('Erro ao tentar  a entrega.');
        }
      }

      return setOpen(current => !current);
    }

    const confirmation = window.confirm(
      'Tem certeza que deseja excluir esse destinatário?'
    );

    if (confirmation) {
      try {
        await api.delete(`problems/${content.id}`);

        setOpen(current => !current);
        loadProblems();
        return toast.success('Problema excluido!');
      } catch (error) {
        setOpen(current => !current);
        return toast.error('Erro ao tentar exluir o problema!.');
      }
    }

    return setOpen(current => !current);
  };

  const modalOption = () => {
    if (option === 'view') {
      return (
        <>
          <S.Header>VISUALIZAR PROBLEMA</S.Header>
          <S.Box>
            <S.Span>{content.description}</S.Span>
          </S.Box>
        </>
      );
    }
    if (option === 'update') {
      return (
        <S.Strong>Não é possível editar um problema da entrega. </S.Strong>
      );
    }

    if (option === 'delete') {
      return (
        <>
          <S.Strong>Confirmar exlcusão</S.Strong>

          <S.DeleteBox>
            <S.DeleteButton onClick={handleDelete}>
              EXLUIR PROBLEMA
            </S.DeleteButton>
            <S.DeleteButton onClick={() => handleDelete('delivery')}>
              CANCELAR ENTREGA
            </S.DeleteButton>
          </S.DeleteBox>
        </>
      );
    }
  };

  const handleOpen = (data, type) => {
    setContent(data);

    setOption(type);
    setOpen(current => !current);
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <S.Content>{modalOption()}</S.Content>
      </Modal>
      <S.Title>Problemas na Encomenda</S.Title>
      <S.Container>
        <S.FuncBar>
          <S.Input />
        </S.FuncBar>
        <S.Table>
          <S.HeadRow>
            <S.Head>Encomenda</S.Head>
            <S.Head>Problema</S.Head>
            <S.Head>Ações</S.Head>
          </S.HeadRow>
          {problems.map(problem => (
            <S.Row>
              <S.Item>#{problem.delivery_id}</S.Item>
              <S.Item>
                <S.P>{problem.description}</S.P>
              </S.Item>
              <S.Item>
                <Menu view setOpen={type => handleOpen(problem, type)} />
              </S.Item>
            </S.Row>
          ))}
        </S.Table>
      </S.Container>
    </>
  );
}
