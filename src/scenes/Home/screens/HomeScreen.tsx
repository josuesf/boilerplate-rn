import * as React from 'react';
import {Box, Container} from '@components';
import {Header} from '../components/Header';

export function HomeScreen() {
  return (
    <Container>
      <Box mx="sm" mt="l">
        <Header nameUser="Josue Farfan" />
      </Box>
    </Container>
  );
}
