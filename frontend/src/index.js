import React from 'react';
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <App />
    </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

