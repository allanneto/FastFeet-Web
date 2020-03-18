import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

// o redux persist ira se conectar com o storage referente a plataforma que estiver sendo executa a aplicação (local storage =web/ asyc storage = mobile)

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['user', 'auth'],
    },
    reducers
  );

  return persistedReducer;
};
