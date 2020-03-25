import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'login', {
      email,
      password,
    });

    const { token, name } = response.data.access;

    yield put(loginSuccess(token, name));

    history.push('/deliveries');
  } catch (err) {
    toast.error('E-mail ou senha informados incorretamente');
    yield put(loginFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
