import {createTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

export const colors = {
  primary: '#334FFA',
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  text: '#020202',
  gray: '#9B9898',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

export const fonts = {
  avenir: 'Avenir',
};

export const theme = createTheme({
  colors,
  fonts,
  spacing: {
    s: 8,
    m: 16,
    sm: 20,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontSize: RFValue(20),
      lineHeight: RFValue(27),
      fontFamily: 'Avenir',
      fontWeight: '800',
      color: 'text',
    },
    defaults: {
      fontSize: RFValue(16),
      lineHeight: RFValue(20),
      fontFamily: 'Avenir',
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
