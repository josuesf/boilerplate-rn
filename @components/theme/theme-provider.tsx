import * as React from 'react';
import type {ReactElement} from 'react';
import {
  ThemeProvider as ThemeProviderRS,
  useTheme as useThemeRS,
} from '@shopify/restyle';
import {theme, Theme} from './index';

interface ThemeProviderProps {
  children?: ReactElement;
}

export const useTheme: () => Theme = useThemeRS;

export const ThemeProvider = ({children}: ThemeProviderProps) => (
  <ThemeProviderRS theme={theme}>{children}</ThemeProviderRS>
);
