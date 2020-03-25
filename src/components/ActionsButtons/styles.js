import styled from 'styled-components';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const SaveButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 112px;
  height: 36px;
  border: 0;
  padding: 0;

  background: #320d6d;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  border-radius: 4px;
`;

export const Check = styled(MdDone)`
  width: 20px;
  height: 20px;
  color: #fff;
  padding: 0;
  margin-right: 5px;
`;

export const Return = styled(MdKeyboardArrowLeft)`
  width: 20px;
  height: 20px;
  color: #fff;
  padding: 0;
  margin-right: 5px;
`;

export const ReturnButton = styled.button.attrs({
  type: 'button',
})`
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 112px;
  height: 36px;
  border: 0;
  padding: 0;

  background: #cccccc;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  border-radius: 4px;
`;
