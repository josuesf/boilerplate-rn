// In App.js in a new project

import * as React from 'react';
import {ThemeProvider} from '@components';
import {MainNavigation} from 'src/navigation/MainNavigation';
import 'src/i18n';
import moment from 'moment';
import 'moment/locale/es-mx';

function App() {
  moment.locale('es-mx');
  return (
    <ThemeProvider>
      <MainNavigation />
    </ThemeProvider>
  );
}

export default App;
