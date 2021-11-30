/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Houses from './model/houses.json';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  Button,
  Pressable,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const House = ({data}): Node => {
  const switchFavorite = () => {
    console.log(123);
  };

  return (
    <View style={[styles.houseContainer, styles.row]}>
      <Image style={styles.houseImage} source={require('./img/house.jpg')} />
      <View style={styles.houseInfoContainer}>
        <Text style={styles.houseHeader}>{data.nombre}</Text>
        <View style={styles.row}>
          <Text style={styles.genericIcon}>icon</Text>
          <Text>{data.direccion}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.genericIcon}>icon</Text>
            <Text style={styles.bold}>{data.nhabitantes}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.genericIcon}>icon</Text>
            <Text style={styles.bold}>{data.nbaños}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.genericIcon}>icon</Text>
            <Text style={styles.bold}>{data.superficie} ft</Text>
          </View>
        </View>
        <View style={[styles.row, styles.spaceAround]}>
          <Text style={styles.houseMontly}>${data.costemensual}/m</Text>
          <Pressable style={styles.favoriteButton} onPress={() => console.log(123)}>
            <Text style={styles.favoriteButtonText}>asd</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const App: () => Node = () => {
  const renderHouse = ({item}) => <House data={item} />;

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.header}>Propiedades</Text>
      <FlatList
        data={Houses}
        renderItem={renderHouse}
        keyExtractor={house => house.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(240, 240, 240)',
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    marginBottom: 10,
  },
  houseContainer: {
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
  },
  houseImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  houseInfoContainer: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  houseHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  houseMontly: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  gray: {
    color: 'gray',
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
  },
  genericIcon: {
    color: 'gray',
    marginRight: 10,
  },
  spaceAround: {
    justifyContent: 'space-between',
  },
  favoriteButton: {
    width: 30,
    height: 30,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 25,
  },
});

export default App;
