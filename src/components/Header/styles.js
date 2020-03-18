import styled from 'styled-components';
import { darken } from 'polished';

import Logo1 from '~/assets/logo2.png';

export const Container = styled.div`
  background: #fff;
  height: 64px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;
`;

export const Logo = styled.img.attrs({
  src: Logo1,
})`
  width: 135px;
  height: 26px;
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;

  position: absolute;
  left: 200px;
`;

export const Item = styled.li`
  font-size: 15px;
  color: #999999;
  font-weight: bold;
  margin: 0 15px;
  line-height: 20px;

  cursor: pointer;

  &:hover {
    color: ${darken(0.5, '#999999')};
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #666666;
  }

  span {
    margin-top: 5px;
    font-size: 14px;
    color: #de3b3b;

    &:hover {
      cursor: pointer;
    }
  }
`;
