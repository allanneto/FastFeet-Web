import styled from 'styled-components';
// import { lighten } from 'polished';
import {
  MdAddCircleOutline,
  // MdMoreHoriz,
  // MdRemoveRedEye,
  // MdDeleteForever,
} from 'react-icons/md';
// import { GoPencil } from 'react-icons/go';

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
  placeholder: 'Buscar por entregador',
})`
  padding-left: 15px;
  width: 237px;
  height: 36px;

  background: #ffffff;
  border: 1px solid #dddddd;
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
`;

export const Row = styled.tr`
  /* width: 100%; */
  height: 57px;

  background: #fff;
  border-radius: 4px;
  opacity: 1;
`;

export const Head = styled.th.attrs({
  scope: 'col',
  // align: 'left',
})`
  width: 150px;
  font-size: 16px;
  text-align: left;

  :first-child {
    padding-left: 15px;
  }

  :last-child {
    text-align: right;
    padding-right: 15px;
    width: 50px;
  }
`;

export const Item = styled.td.attrs({})`
  color: #666666;
  font-size: 16px;
  width: 150px;

  :first-child {
    text-align: left;
    padding-left: 15px;
  }
  :last-child {
    text-align: right;
    padding-right: 15px;
    width: 50px;
  }
`;

export const Icon = styled(MdAddCircleOutline)`
  margin-right: 5px;

  width: 18px;
  height: 18px;
`;
