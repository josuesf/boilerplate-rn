import * as React from 'react';
import {Box, Button, Card, Container, Text} from '@components';
import {Header} from '../components/Header';
import {useTranslation} from 'react-i18next';
import {ListPoints} from '../components/ListPoints';

export function HomeScreen() {
  const {t} = useTranslation();
  const totalPoints = 1000;
  const data = [
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 42416,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '3',
    },
    {
      createdAt: '2022-12-09T10:20:00.909Z',
      product: 'Fantastic Granite Bacon',
      points: 42416,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: true,
      id: '4',
    },
  ];
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
            <Text mt="s" mb="xl" textAlign="center" variant="h1">
              {`${totalPoints.toFixed(2)} pts`}
            </Text>
          </Card>
          <Text variant="h4">{t('home.yourMovements')}</Text>
        </Box>
        <ListPoints data={data} />
        <Button label="Todos" />
      </Box>
    </Container>
  );
}
