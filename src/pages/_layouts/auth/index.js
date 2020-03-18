import React from 'react';
import PropTypes from 'prop-types';
import Login from '~/pages/Login';
import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Login>{children}</Login>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
