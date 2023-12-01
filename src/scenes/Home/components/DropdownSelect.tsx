import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {FILTERS} from 'src/api/productsApi';

type Props = {
  setFilter: (filter: string) => void;
};

export const DropdownSelect = ({setFilter}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Ganados', value: FILTERS.earned},
    {label: 'Canjeados', value: FILTERS.redemption},
    {label: 'Todos', value: ''},
  ]);

  const handleItemChange = (item: any) => {
    console.log(item);
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
