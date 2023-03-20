import React from 'react';
import {ProductDetail} from './ProductDetail';
import {render, screen} from 'test-utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/Routes';

type NavigationScreenPropAlias = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail'
>;
let nameScreen: 'ProductDetail';
const productSelected = {
  createdAt: '2022-12-09T10:20:00.909Z',
  product: 'Fantastic Granite Bacon',
  points: 200,
  image: 'https://loremflickr.com/640/480/technics',
  is_redemption: false,
  id: '3',
};
const ProductDetailProps = (): NavigationScreenPropAlias => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  route: {
    params: {
      product: productSelected,
    },
    key: '1',
    name: nameScreen,
  },
});

describe('ProductDetail', function () {
  test('Display correctly product selected', async () => {
    const props: NavigationScreenPropAlias = ProductDetailProps();
    const {getByTestId} = render(<ProductDetail {...props} />);
    expect(getByTestId('name-product')).toHaveTextContent(
      productSelected.product,
    );
    expect(getByTestId('date-created')).toHaveTextContent(
      'details.boughtWhere 9 de diciembre, 2022',
    );
    expect(getByTestId('points-earned')).toHaveTextContent(
      productSelected.points.toString(),
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
