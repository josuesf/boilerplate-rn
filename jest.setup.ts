import '@testing-library/jest-native/extend-expect';
import {
  AbortController,
  abortableFetch,
} from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import {fetch as fetch_, Headers, Response} from 'cross-fetch';

jest.useFakeTimers();
global.__reanimatedWorkletInit = jest.fn();
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
const {fetch, Request} = abortableFetch(fetch_);
global.fetch = fetch;
global.Request = Request;
global.Headers = Headers;
global.Response = Response;
global.AbortController = AbortController;
export default jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper',
);
