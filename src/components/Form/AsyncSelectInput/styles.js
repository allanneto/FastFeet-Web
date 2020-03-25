import styled from 'styled-components';

import ReactSelect from 'react-select';

export const Container = styled.div``;

export const Select = styled(ReactSelect)`
  width: 650px;
  height: 45px;
  margin-top: 10px;

  border-radius: 4px;
  background: #ffffff;
  border: 0;
  border: 1px solid #dddddd;
  font-size: 16px;
  font-weight: normal;

  ::placeholder {
    color: #999999;
    font-size: 16px;
    padding-left: 15px;
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
