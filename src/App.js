import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Items from './components/Items';

const App = () => (
  <Provider store={store}>
    <div>
      <Items />
    </div>
  </Provider>
);

export default App;