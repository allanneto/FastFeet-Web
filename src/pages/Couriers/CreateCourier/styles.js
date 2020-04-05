import styled, { css } from 'styled-components';
import OrignalInput from '~/components/Form/SimpleInput';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  padding: 0px 270px;
`;

export const Box = styled.div`
  margin-top: 20px;
  border-radius: 5px;

  display: flex;
  width: 100%;
  padding: 25px 0px;
  background: #fff;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  span {
    margin-top: 5px;
    font-size: 12px;
    color: #ff0000;
  }
`;

export const Title = styled.h2`
  margin: 34px 0 34px 270px;
`;

export const Input = styled(OrignalInput).attrs(props => ({
  error: props.error,
}))`
  max-width: 840px;

  ${props =>
    props.error
      ? css`
          border: 1px solid #ff0000;
        `
      : css``} /* 
  :last-child {
    label {
      max-width: 840px;
    }
  } */
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;
