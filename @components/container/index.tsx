import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export const Container = ({children}: Props) => {
  return <SafeAreaView style={Styles.container}>{children}</SafeAreaView>;
};
