import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {FILTERS} from 'src/api/productsApi';
import {useTranslation} from 'react-i18next';

type Props = {
  setFilter: (filter: string) => void;
};

export const DropdownSelect = ({setFilter}: Props) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: t('home.btnEarned'), value: FILTERS.earned},
    {label: t('home.btnRedemption'), value: FILTERS.redemption},
    {label: t('home.btnAll'), value: ''},
  ]);

  const handleItemChange = (item: any) => {
    setFilter(item);
  };

  return (
    <DropDownPicker
      placeholder="elija una opsion"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={item => {
        handleItemChange(item);
      }}
    />
  );
};
