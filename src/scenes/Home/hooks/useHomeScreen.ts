import React from 'react';
import {useTranslation} from 'react-i18next';
import {useGetProductsQuery} from 'src/api/productsApi';
import {getTotalPoints} from 'src/common/utils/calculation';

export function useHomeScreen() {
  const {t} = useTranslation();
  const [filter, setFilter] = React.useState<string>('');
  const {data, isFetching} = useGetProductsQuery(filter);
  const totalPoints = getTotalPoints(data || []);

  return {
    t,
    filter,
    setFilter,
    data,
    isFetching,
    totalPoints,
  };
}
