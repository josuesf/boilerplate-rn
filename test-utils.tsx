import React from 'react';
import {render as rntlRender} from '@testing-library/react-native';
import {ThemeProvider} from './@components';
import moment from 'moment';
import 'moment/locale/es-mx';
import {Provider} from 'react-redux';
import {store} from 'src/redux/store';

function render(ui: React.ReactElement) {
  moment.locale('es-mx');
  return rntlRender(ui, {
    wrapper: ({children}) => (
      <ThemeProvider>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    ),
  });
}

export * from '@testing-library/react-native';

export {render};
