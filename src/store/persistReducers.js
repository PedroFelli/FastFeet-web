import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistRedecer = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistRedecer;
};
