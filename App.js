/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import store from './store';

const persistedStore = persistStore(store)
import Nav from './navigations'
export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore} >
          <Nav />
        </PersistGate>
      </Provider>
    </>
  );
}
