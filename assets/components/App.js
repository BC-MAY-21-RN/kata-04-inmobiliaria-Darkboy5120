/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HousesList from '../components/HousesList';
//import HousesImages from './assets/components/houses_images';
//import Icon from 'react-native-ionicons';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <HousesList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(240, 240, 240)',
    padding: 20,
    flex: 1,
  },
});

export default App;
