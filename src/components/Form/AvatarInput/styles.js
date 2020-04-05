import styled from 'styled-components';
import { MdAddCircleOutline } from 'react-icons/md';

export const Container = styled.div``;

export const Label = styled.label`
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Image = styled.img.attrs({})`
  background: #dddddd;
  max-width: 200px;
  max-height: 200px;
`;

export const Input = styled.input.attrs({
  type: 'file',
  id: 'avatar',
  accept: 'image/*',
})`
  display: none;
`;

export const Icon = styled(MdAddCircleOutline)`
  width: 200px;
  height: 200px;
  color: #dddddd;
`;
