import styled from 'styled-components';
import AInput from '~/components/Form/SimpleInput';
import AvatarInput from '~/components/Form/AvatarInput';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  label {
    margin-left: 0px;
    margin-bottom: 10px;
  }
  span {
    margin-top: 5px;
    font-size: 12px;
    color: #ff0000;
  }
`;

export const Avatar = styled(AvatarInput)`
  margin: auto;
`;

export const Input = styled(AInput)`
  max-width: 400px;
`;
