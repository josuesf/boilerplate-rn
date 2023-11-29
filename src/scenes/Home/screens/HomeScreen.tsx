import * as React from 'react';
import {Box, Card, Container, Text} from '@components';
import {Header} from '../components/Header';
import {ListPoints} from '../components/ListPoints';
import {FilterButton} from '../components/FilterButton';
import {useHomeScreen} from '../hooks/useHomeScreen';

export function HomeScreen() {
  const {filter, t, totalPoints, isFetching, data, setFilter} = useHomeScreen();
  return (
    <Container>
      <Box flex={1} mx="sm" mt="l">
        <Header nameUser="Josue Farfan" />
        <Box flex={1}>
          <Text variant="h4">{t('home.yourPoints')}</Text>
          <Card variant="secondary" my="sm">
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
        <FilterButton filter={filter} setFilter={setFilter} />
      </Box>
    </Container>
  );
}
