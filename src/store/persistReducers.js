import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'mecservicos',
    storage,
    whitelist:['auth','user','car'],
  }, 
  reducers
  );

  return persistedReducer;
}