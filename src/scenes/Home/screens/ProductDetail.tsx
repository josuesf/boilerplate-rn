import * as React from 'react';
import {Box, Button, Text} from '@components';
import {RFValue} from 'react-native-responsive-fontsize';
import {RootStackParamList} from 'src/navigation/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {FormatDate} from 'src/common/utils/Formats';
import {ImageProduct} from '../components/ImageProduct';
import {ScrollView} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

export function ProductDetail({route, navigation}: Props) {
  const {product} = route.params;
  const {t} = useTranslation();
  const dateCreated = FormatDate(new Date(product.createdAt));
  return (
    <Box flex={1}>
      <ScrollView>
        <Box
          bg="purpleLight"
          justifyContent="flex-end"
          height={RFValue(150)}
          pl="m"
          pb="m">
          <Text testID="name-product" variant="h2">
            {product.product}
          </Text>
        </Box>
        <Box p="m">
          <ImageProduct uri={product.image} />
          <Text variant="h4">{t('details.detailsProduct')}</Text>
          <Text testID="date-created" my="m" variant="h3">{`${t(
            'details.boughtWhere',
          )} ${dateCreated}`}</Text>
          <Text variant="h4">{t('details.pointsEarned')}</Text>
          <Text testID="points-earned" my="m" variant="h3">{`${
            product.points
          } ${t('points')}`}</Text>
          <Button
            onPress={() => navigation.goBack()}
            variant="primary"
            label={t('accept')}
          />
        </Box>
      </ScrollView>
    </Box>
  );
}
