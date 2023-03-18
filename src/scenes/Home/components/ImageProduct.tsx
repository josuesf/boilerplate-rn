import {Box} from '@components';
import React from 'react';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const styleImg = {height: RFValue(350), borderRadius: RFValue(10)};
type Props = {
  uri: string;
};
export const ImageProduct = ({uri}: Props) => (
  <Box
    justifyContent="center"
    mb="m"
    elevation={5}
    shadowColor="black"
    shadowOffset={{width: 0, height: 2}}
    shadowOpacity={0.25}
    bg="gray"
    height={RFValue(340)}
    borderRadius={RFValue(10)}
    shadowRadius={3.8}>
    <Image style={styleImg} source={{uri}} />
  </Box>
);
