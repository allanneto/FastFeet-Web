import styled from 'styled-components';
import { MdAddCircleOutline, MdMoreHoriz } from 'react-icons/md';
import { darken } from 'polished';

export const Title = styled.h2`
  margin: 34px 0 34px 120px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0px 120px;
`;

export const FuncBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input.attrs({
  placeholder: 'Buscar por encomendas',
})`
  padding-left: 15px;
  width: 237px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #dddddd;

  ::placeholder {
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: separate;
  border-spacing: 0 20px;
`;

export const HeadRow = styled.tr`
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const Row = styled.tr`
  width: 100%;
  height: 57px;
  justify-content: space-between;

  background: #fff;
  border-radius: 4px;
  opacity: 1;
`;

export const Head = styled.th.attrs({
  scope: 'col',
  // align: 'left',
})`
  font-size: 16px;
  text-align: left;
  padding-left: 10px;

  :last-child {
    text-align: right;
  }
`;

export const Item = styled.td.attrs({})`
  position: relative;
  text-align: left;

  color: #666666;
  font-size: 16px;
  padding-left: 10px;

  :last-child {
    text-align: right;
  }
`;

export const Icon = styled(MdAddCircleOutline)`
  margin-right: 5px;

  width: 18px;
  height: 18px;
`;

// Finalizado - Entregue
export const Status1 = styled.span.attrs(props => ({
  status: props.status,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #dff0df;
  width: 105px;

  border-radius: 12px;
  padding: 3px 7px;

  font-size: 14px;
  font-weight: bold;
  color: #2ca42b;

  div {
    background: #2ca42b;
    width: 10px;
    height: 10px;

    border-radius: 50%;
  }
`;

// Pendente - para retirar
export const Status2 = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f0df;
  width: 103px;

  border-radius: 12px;
  padding: 3px 7px;

  font-size: 14px;
  font-weight: bold;
  color: #c1bc35;

  div {
    background: #c1bc35;
    width: 10px;
    height: 10px;

    border-radius: 50%;
  }
`;

// Em transito - Ja retirado
export const Status3 = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #bad2ff;
  width: 100px;

  border-radius: 12px;
  padding: 3px 7px;

  font-size: 14px;
  font-weight: bold;
  color: #4d85ee;

  div {
    background: #4d85ee;
    width: 10px;
    height: 10px;

    border-radius: 50%;
  }
`;

// Cancelado
export const Status4 = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fab0b0;
  width: 115px;

  border-radius: 12px;
  padding: 3px 7px;

  font-size: 14px;
  font-weight: bold;
  color: #de3b3b;

  div {
    background: #de3b3b;
    width: 10px;
    height: 10px;

    border-radius: 50%;
  }
`;

export const Actions = styled(MdMoreHoriz)`
  width: 25px;
  height: 25px;
  color: #000;

  border-radius: 5px;
  background: #c6c6c6;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const HBox = styled.div`
  display: flex;
  align-items: center;
  strong {
    font-size: 16px;
  }
`;

export const Strong = styled.strong`
  margin: 3px 0px 3px 0;
  font-size: 16px;
  color: #444444;
`;

export const Span = styled.span`
  font-size: 16px;
  color: #666666;
`;

export const Signature = styled.img`
  max-height: 200px;
`;

export const DeleteBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;

  margin-top: 5px;
  border: 0;
  background: #de3b3b;
  border-radius: 4px;

  color: #fff;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background: ${darken(0.1, '#de3b3b')};
  }
`;
