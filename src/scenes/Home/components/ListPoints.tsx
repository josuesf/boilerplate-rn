import React from 'react';
import {FlatList} from 'react-native';
import {Box} from '@components';
import {RFValue} from 'react-native-responsive-fontsize';
import {ItemPoint} from './ItemPoint';
import {IProduct} from 'src/common/models/Products';
type Props = {
  data: Array<IProduct>;
};
export const ListPoints = ({data}: Props) => {
  return (
    <Box flex={1} bg="white" py="s" px="s" my="m" borderRadius={RFValue(10)}>
      <FlatList data={data} renderItem={ItemPoint} />
    </Box>
  );
};
