import styled from 'styled-components';
import { lighten } from 'polished';
import Logo from '~/assets/logo2.png';

export const Container = styled.div`
  width: 360px;
  height: 425px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 60px 30px;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: 9px;
    width: 300px;
    height: 45px;

    background: ${lighten(0.15, '#ccc')};

    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 0px 10px 15px;

    font-size: 16px;

    &::placeholder {
      opacity: 0.8;
    }
  }
  span {
    margin-top: 5px;
    font-size: 12px;
    color: #ff0000;
  }
`;

export const LogoImg = styled.img.attrs({
  src: Logo,
})`
  width: 259px;
  height: 44px;
  margin-bottom: 25px;

  cursor: pointer;
`;

export const Info = styled.label`
  font-weight: bold;
  color: #444444;
  font-size: 14px;
  margin-top: 15px;
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  width: 300px;
  height: 45px;
  margin-top: 15px;

  background: #320d6d;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;

  &:hover {
    background: ${lighten(0.06, '#320d6d')};
  }
`;
