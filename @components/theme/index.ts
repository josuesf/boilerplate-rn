import {createTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

export const colors = {
  primary: '#334FFA',

  purpleLight: '#CFD6FF',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  text: '#020202',
  gray: '#9B9898',

  black: '#0B0B0B',
  white: '#FFFFFF',

  red: '#FF0000',
};

export const fonts = {
  avenir: 'Avenir',
};

export const theme = createTheme({
  colors,
  fonts,
  spacing: {
    s: RFValue(10),
    m: RFValue(16),
    sm: RFValue(20),
    l: RFValue(24),
    xl: RFValue(40),
  },
  textVariants: {
    title: {
      fontSize: RFValue(20),
      lineHeight: RFValue(27),
      fontFamily: 'Avenir',
      fontWeight: '800',
      color: 'text',
    },
    h1: {
      fontSize: RFValue(32),
      lineHeight: RFValue(44),
      fontFamily: 'Avenir',
      fontWeight: '900',
      color: 'white',
    },
    h2: {
      fontSize: RFValue(20),
      lineHeight: RFValue(24),
      fontFamily: 'Avenir',
      fontWeight: '900',
      color: 'black',
    },
    h3: {
      fontSize: RFValue(16),
      lineHeight: RFValue(22),
      fontFamily: 'Avenir',
      fontWeight: '900',
      color: 'black',
    },
    h4: {
      fontSize: RFValue(14),
      lineHeight: RFValue(19),
      fontFamily: 'Avenir',
      fontWeight: '900',
      color: 'gray',
    },
    h5: {
      fontSize: RFValue(12),
      lineHeight: RFValue(16),
      fontFamily: 'Avenir',
      fontWeight: '400',
      color: 'black',
    },
    defaults: {
      fontSize: RFValue(16),
      lineHeight: RFValue(20),
      fontFamily: 'Avenir',
      color: 'text',
    },
  },
  buttonVariants: {
    primary: {
      height: RFValue(50),
      backgroundColor: 'primary',
      borderRadius: RFValue(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  cardVariants: {
    defaults: {
      backgroundColor: 'primary',
      borderRadius: RFValue(20),
      padding: 'sm',
    },
  },
});

export type Theme = typeof theme;
