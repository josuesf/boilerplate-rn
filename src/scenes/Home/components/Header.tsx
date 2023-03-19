import * as React from 'react';
import {Box, Text} from '@components';
import {useTranslation} from 'react-i18next';
interface Props {
  nameUser: string;
}
export const Header = ({nameUser}: Props) => {
  const {t} = useTranslation();
  return (
    <Box mb="sm">
      <Text variant="title">{t('home.header.title')}</Text>
      <Text testID="name-user">{nameUser}</Text>
    </Box>
  );
};
