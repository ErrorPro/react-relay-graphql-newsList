import React from 'react';
import { render } from 'react-dom';
import { setEnviroment } from 'relay-compose';

import relayEnv from './createRelayEnv';
import { NewsListContainer } from './bundles/news/NewsList';

setEnviroment(relayEnv);

// We can use redux Provider to wrap our app by redux store, also we need to create store here and dispatch initial actions or sagas.
// But I am using relay to keep my business data, so I dont need redux.

render(
  <NewsListContainer />,
  document.getElementById('root'),
);
