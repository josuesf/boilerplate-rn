// In App.js in a new project

import * as React from 'react';
import {ThemeProvider} from '@components';
import {MainNavigation} from 'src/navigation/MainNavigation';

function App() {
  return (
    <ThemeProvider>
      <MainNavigation />
    </ThemeProvider>
  );
}

export default App;
