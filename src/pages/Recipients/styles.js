import styled from 'styled-components';
import { darken } from 'polished';
import { MdAddCircleOutline } from 'react-icons/md';

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

  :first-child {
    padding-left: 15px;

    width: 50px;
  }
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

    width: 50px;
  }

  :last-child {
    text-align: right;
    padding-right: 15px;
  }
`;

export const Item = styled.td.attrs({})`
  position: relative;
  color: #666666;
  font-size: 16px;
  width: 150px;

  :first-child {
    text-align: left;
    padding-left: 15px;
    width: 50px;
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

export const MiniAvatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const HBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Strong = styled.strong`
  margin: 3px 0px 3px 0;
  font-size: 16px;
  color: #444444;

  span {
    font-weight: normal;
    color: #666666;
  }
`;

export const Span = styled.span.attrs({})`
  font-size: 16px;
  color: #666666;
`;

export const Header = styled.strong`
  align-self: center;
  font-size: 16px;
  color: #444444;

  margin-bottom: 10px;
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
