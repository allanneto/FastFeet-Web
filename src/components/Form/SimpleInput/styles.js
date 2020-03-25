import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  width: 1330px;
  height: 45px;
  margin-top: 10px;

  border-radius: 4px;
  background: #ffffff;
  border: 0;
  border: 1px solid #dddddd;
  font-size: 16px;
  padding-left: 10px;
  ::placeholder {
    color: #999999;
    font-size: 16px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;

  margin: 15px 0px 0px 30px;

  color: #444444;

  :last-child {
    input {
      width: 1330px;
    }
  }
`;
