import * as React from 'react';
import {Box, Card, Container, Text} from '@components';
import {Header} from '../components/Header';
import {ListPoints} from '../components/ListPoints';
import {useHomeScreen} from '../hooks/useHomeScreen';
import {DropdownSelect} from '../components/DropdownSelect';

export function HomeScreen() {
  const {t, totalPoints, isFetching, data, setFilter} = useHomeScreen();
  return (
    <Container>
      <Box flex={1} mx="sm" mt="l">
        <Header nameUser="Josue Farfan" />
        <Box flex={1}>
          <DropdownSelect setFilter={setFilter} />
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
      </Box>
    </Container>
  );
}
