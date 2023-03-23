import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Box, Text} from '@components';
import {IProduct} from 'src/common/models/Products';
import {RFValue} from 'react-native-responsive-fontsize';
import {FormatDate} from 'src/common/utils/Formats';

type Props = {
  item: IProduct;
  onPress: () => void;
};

const styleImg = {
  height: RFValue(55),
  width: RFValue(55),
  borderRadius: RFValue(10),
};

export const ItemPoint = ({item, onPress}: Props) => {
  const date = new Date(item.createdAt);
  return (
    <TouchableOpacity onPress={onPress}>
      <Box flexDirection="row" mb="s" alignItems="center" key={item.id}>
        <Box backgroundColor="gray" borderRadius={RFValue(10)} mr="s">
          <Image
            resizeMethod="auto"
            resizeMode="cover"
            style={styleImg}
            source={{uri: item.image}}
          />
        </Box>
        <Box flex={1}>
          <Text testID="item-name" variant="h4" color="black" fontWeight="800">
            {item.product}
          </Text>
          <Text testID="item-date" variant="h5">
            {FormatDate(date)}
          </Text>
        </Box>
        <Text testID="item-points" variant="h4" color="black" fontWeight="800">
          <Text
            fontWeight="800"
            color={item.is_redemption ? 'red' : 'greenPrimary'}>
            {item.is_redemption ? '- ' : '+ '}
          </Text>
          {item.points}
        </Text>
        <Text ml="s" fontWeight="800">
          {'>'}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
