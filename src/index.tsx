// watcher sometimes takes some time to realize there is a change
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import store from './store';

ReactDOM.render(<App store={ store }/>, document.getElementById('app'));
