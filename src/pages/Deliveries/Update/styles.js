import styled from 'styled-components';
import ASelect from '~/components/Form/AsyncSelectInput';
import AInput from '~/components/Form/SimpleInput';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  label {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const Select = styled(ASelect)`
  width: 400px;
  border: 0;
`;

export const Input = styled(AInput)`
  width: 400px;
`;
