import * as React from 'react'; 
import {Box, Button} from '@components';
import {FILTERS} from 'src/api/productsApi';
import {useTranslation} from 'react-i18next';

export const ReButton = ({text, click, longClick}) => {

  return (

    <Button  
      label={text}
      flex={1}
      onPress={click}
      onLongPress={longClick}
    ></Button>
    
  )
}
