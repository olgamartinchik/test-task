import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from './store/store';

describe('App tests', () => {
  it('render app', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
