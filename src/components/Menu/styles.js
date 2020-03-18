import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { MdRemoveRedEye, MdDeleteForever, MdMoreHoriz } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';

export const Button = styled.button.attrs()`
  position: relative;
  margin: 0;
  border: 0;
`;

export const Container = styled.div.attrs(props => ({
  hide: props.hide,
}))`
  display: ${props => (props.hide ? 'none' : 'block')};
  position: absolute;
  align-items: center;
  padding: 15px;
  left: -62px;
  top: 40px;

  z-index: 10;
  background: ${lighten(0.2, '#ccc')};
  width: 150px;
  height: 120px;

  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 0.78);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: calc(50% - 20px);
    width: 0px;
    height: 0px;

    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${lighten(0.2, '#ccc')};
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 0;

    }

    span {
      font-size: 16px;
      color: #999999;
      margin-left: 5px;
    }
  }
`;

export const Li = styled.li.attrs(props => ({
  view: props.view,
}))`
  display: flex;
  align-items: center;

  padding: 5px;
  color: #999999;

  &:hover {
    color: ${darken(0.4, '#999999')};
    cursor: pointer;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${lighten(0.2, '#999999')};
  }
`;

export const Pencil = styled(GoPencil)`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  color: #4d85ee;
`;

export const Delete = styled(MdDeleteForever)`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  color: #de3b3b;
`;

export const Eye = styled(MdRemoveRedEye)`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  color: #320d6d;
`;

export const Actions = styled(MdMoreHoriz)`
  position: relative;
  width: 25px;
  height: 25px;
  color: #000;

  border-radius: 5px;
  background: #c6c6c6;

  &:hover {
    cursor: pointer;
  }
`;

// https://gist.github.com/LarissaAbreu/63a4e9c4b15f82870df338f21c44f640
// https://gist.github.com/LarissaAbreu/63a4e9c4b15f82870df338f21c44f640
// https://gist.github.com/LarissaAbreu/73ad48af085a967df6e5442561ec21e4
