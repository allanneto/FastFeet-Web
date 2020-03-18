import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';
import ActionsButtons from '~/components/ActionsButtons';

import api from '~/services/api';

export default function Create() {
  const token = useSelector(state => state.auth.token);

  const [test, setTest] = useState(false);

  const [courier, setCourier] = useState('');
  const [recipient, setRecipient] = useState('');

  const [recipients, setRecipients] = useState([]);
  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients', {});

      setRecipients(response.data);
    }

    async function loadCouriers() {
      const response = await api.get('couriers', {});

      const { data } = response;

      console.tron.log(data.map(c => c.name));

      setCouriers(response.data);
    }

    loadRecipients();
    loadCouriers();
  }, [token]);

  const handleVisibleChange = () => {
    setTest(current => !current);
  };

  const handleSelect = item => {
    setTest(current => !current);
    setRecipient(item);
  };

  return (
    <>
      <S.Title>Cadastro de encomendas</S.Title>
      <S.Container>
        <ActionsButtons />
        <S.Box>
          <S.Form>
            <S.Label>
              Destinatário
              <S.Div>
                <S.Input
                  value={recipient}
                  onChange={e => setRecipient(e.target.value)}
                />
                <S.Icon onClick={handleVisibleChange} />
              </S.Div>
              <S.RecipientList visible={test}>
                <S.Scroll>
                  {recipients.map(r => (
                    <S.Option>
                      <S.Itens
                        type="readonly"
                        value={r.recipient_name}
                        onClick={e => handleSelect(e.target.value)}
                      />
                    </S.Option>
                  ))}
                </S.Scroll>
              </S.RecipientList>
            </S.Label>
            <S.Label>
              Entregador
              <S.Div>
                <S.Input />
                <S.Icon />
              </S.Div>
              <S.CourierList visible={test}>
                <S.Scroll>
                  {couriers.map(c => (
                    <S.Option>
                      <S.Itens
                        type="readonly"
                        value={c.name}
                        onClick={e => handleSelect(e.target.value)}
                      />
                    </S.Option>
                  ))}
                </S.Scroll>
              </S.CourierList>
            </S.Label>
            <S.Label>
              Nome do Produto <S.Input placeholder="Yamaha SX7" />
            </S.Label>
          </S.Form>
        </S.Box>
      </S.Container>
    </>
  );
}
