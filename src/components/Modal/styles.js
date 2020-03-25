import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  background: #ffffff;
  width: 450px;
`;

export const Icon = styled(MdClose)`
  position: absolute;
  height: 20px;
  width: 20px;
  color: #000000;

  top: 5px;
  right: 5px;
`;
