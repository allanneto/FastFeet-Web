import styled, { css } from 'styled-components';
import OrignalInput from '~/components/Form/SimpleInput';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    position: relative;
    display: flex;
    flex-direction: column;

    label {
      margin: 0px 5px 15px 0;
    }
    .first {
      width: 840px;
    }

    .second {
      width: 266px;
      margin-right: 10px;
    }

    .third {
      width: 266px;
      margin-right: 10px;
    }

    span {
      margin-top: 5px;
      font-size: 12px;
      color: #ff0000;
    }
  }
`;

export const Box = styled.div`
  margin-top: 20px;
  border-radius: 5px;

  padding: 25px 30px;
  background: #fff;

  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const Title = styled.h2`
  margin: 34px 0 34px 500px;
`;

export const Input = styled(OrignalInput).attrs(props => ({
  error: props.error,
}))`
  ${props =>
    props.error
      ? css`
          border: 1px solid #ff0000;
        `
      : css``}
`;
