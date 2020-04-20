import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import api from '~/services/api';

export default function AvatarInput({ setAvatar }) {
  const [preview, setPreview] = useState('');

  const handleChange = async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setPreview(url);
    console.tron.log(id);
    setAvatar(id);
  };

  return (
    <S.Container>
      <S.Label>
        {preview ? <S.Image src={preview} alt="" /> : <S.Icon />}
        <S.Input onChange={handleChange} />
      </S.Label>
    </S.Container>
  );
}

AvatarInput.propTypes = {
  // eslint-disable-next-line react/require-default-props
  setAvatar: PropTypes.func,
};
