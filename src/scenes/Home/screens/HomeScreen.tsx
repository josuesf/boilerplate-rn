import * as React from 'react';
import {Box, Button, Card, Container, Text} from '@components';
import {Header} from '../components/Header';
import {useTranslation} from 'react-i18next';
import {ListPoints} from '../components/ListPoints';
import {useGetProductsQuery, FILTERS} from 'src/api/productsApi';
import {getTotalPoints} from 'src/common/utils/calculation';

export function HomeScreen() {
  const {t} = useTranslation();
  const [filter, setFilter] = React.useState<string>('');
  const {data, isFetching} = useGetProductsQuery(filter);
  const totalPoints = getTotalPoints(data || []);
  return (
    <Container>
      <Box flex={1} mx="sm" mt="l">
        <Header nameUser="Josue Farfan" />
        <Box flex={1}>
          <Text variant="h4">{t('home.yourPoints')}</Text>
          <Card my="sm">
            <Text color="white" fontWeight="800">
              {t('months.december')}
            </Text>
            <Text mt="s" mb="l" textAlign="center" variant="h1">
              {`${totalPoints < 0 ? '0.00' : totalPoints.toFixed(2)} pts`}
            </Text>
          </Card>
          <Text variant="h4">{t('home.yourMovements')}</Text>
        </Box>
        <ListPoints isLoading={isFetching} data={data || []} />
        {filter ? (
          <Button onPress={() => setFilter('')} label={t('home.btnAll')} />
        ) : (
          <Box flexDirection="row" alignContent="space-between">
            <Button
              onPress={() => setFilter(FILTERS.earned)}
              flex={1}
              mr="s"
              label={t('home.btnEarned')}
            />
            <Button
              onPress={() => setFilter(FILTERS.redemption)}
              flex={1}
              label={t('home.btnRedemption')}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}
