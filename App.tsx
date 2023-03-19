// In App.js in a new project

import * as React from 'react';
import {ThemeProvider} from '@components';
import {MainNavigation} from 'src/navigation/MainNavigation';
import 'src/i18n';
import moment from 'moment';
import 'moment/locale/es-mx';
import {Provider} from 'react-redux';
import {store} from 'src/redux/store';

function App() {
  moment.locale('es-mx');
  return (
    <ThemeProvider>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
