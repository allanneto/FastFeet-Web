import styled from 'styled-components';
import { MdAddCircleOutline } from 'react-icons/md';
import { lighten } from 'polished';

export const Icon = styled(MdAddCircleOutline)`
  margin-right: 5px;

  width: 18px;
  height: 18px;
`;

export const AddButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 142px;
  height: 36px;
  border: 0;
  background: #320d6d;
  border-radius: 5px;

  font-size: 14px;
  color: #fff;
  font-weight: bold;

  &:hover {
    background: ${lighten(0.1, '#320d6d')};
  }
`;
