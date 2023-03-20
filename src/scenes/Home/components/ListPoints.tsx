import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Box} from '@components';
import {RFValue} from 'react-native-responsive-fontsize';
import {ItemPoint} from './ItemPoint';
import {IProduct} from 'src/common/models/Products';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, ROUTE_PROD_DETAIL} from 'src/navigation/Routes';
type Props = {
  data: Array<IProduct>;
  isLoading: boolean;
};
export const ListPoints = ({data, isLoading}: Props) => {
  const {navigate} = useNavigation<NavigationProp>();
  return (
    <Box flex={1.2} bg="white" py="s" px="s" my="m" borderRadius={RFValue(10)}>
      {isLoading ? (
        <ActivityIndicator testID="loading" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemPoint
              item={item}
              onPress={() => navigate(ROUTE_PROD_DETAIL, {product: item})}
            />
          )}
        />
      )}
    </Box>
  );
};
