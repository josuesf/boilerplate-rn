import {Box, Button} from '@components';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FILTERS} from 'src/api/productsApi';

type Props = {
  filter?: string;
  setFilter: (filter: string) => void;
};

export function FilterButton({filter, setFilter}: Props) {
  const {t} = useTranslation();
  return filter ? (
    <Button
      testID="btn-all"
      onPress={() => setFilter('')}
      label={t('home.btnAll')}
    />
  ) : (
    <Box flexDirection="row" alignContent="space-between">
      <Button
        testID="btn-earned"
        onPress={() => setFilter(FILTERS.earned)}
        flex={1}
        mr="s"
        label={t('home.btnEarned')}
      />
      <Button
        testID="btn-redemption"
        onPress={() => setFilter(FILTERS.redemption)}
        flex={1}
        label={t('home.btnRedemption')}
      />
    </Box>
  );
}
