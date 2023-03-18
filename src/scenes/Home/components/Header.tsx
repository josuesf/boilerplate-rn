import {Box, Text} from '@components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
interface Props {
  nameUser: string;
}
export const Header = ({nameUser}: Props) => {
  const {t} = useTranslation();
  return (
    <Box>
      <Text variant="title">{t('header.title')}</Text>
      <Text>{nameUser}</Text>
    </Box>
  );
};
