import React from 'react';
import {render as rntlRender} from '@testing-library/react-native';
import {ThemeProvider} from '../@components';

function render(ui: React.ReactElement) {
  return rntlRender(ui, {
    wrapper: ({children}) => <ThemeProvider>{children}</ThemeProvider>,
  });
}

export * from '@testing-library/react-native';

export {render};
