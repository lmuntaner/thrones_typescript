import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import './App.css';
import Header from './components/Header/index';
import HousesList from './components/HousesList/index';
import { State } from './store';

interface Props {
  store: Store<State>;
}

const App = ({ store }: Props) =>
  <Provider store={ store }>
    <div className="App">
      <Header title="Winter is coming" />
      <HousesList />
    </div>
  </Provider>;

export default App;
