import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IProduct} from 'src/common/models/Products';

export const ROUTE_HOME = 'Home';
export const ROUTE_PROD_DETAIL = 'ProductDetail';

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: {product: IProduct};
};
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetail'
>;
