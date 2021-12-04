import React from 'react';
import DataHouses from '../data/houses.json';
import styles from '../styles/HousesList';
import {Text, View, FlatList, Image, Pressable} from 'react-native';

DataHouses[0].image = require('../../img/houses/house0.jpg');
DataHouses[1].image = require('../../img/houses/house1.jpg');
DataHouses[2].image = require('../../img/houses/house2.jpg');
DataHouses[3].image = require('../../img/houses/house3.jpg');
DataHouses[4].image = require('../../img/houses/house4.jpg');

const HousesList = () => {
  const renderHouse = ({item}) => <House data={item} />;

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Propiedades</Text>
      <FlatList
        data={DataHouses}
        renderItem={renderHouse}
        keyExtractor={house => house.id}
      />
    </View>
  );
};

const House = ({data}) => {
  return (
    <View style={[styles.houseContainer, styles.row]}>
      <HouseImage source={data.image} calificacion={data.calificacion} />
      <View style={styles.houseInfoContainer}>
        <Text style={styles.houseHeader}>{data.nombre}</Text>
        <View style={styles.row}>
          <Text style={styles.genericIcon}>icon</Text>
          <Text>{data.direccion}</Text>
        </View>
        <View style={styles.row}>
          <IconItem>{data.nhabitantes}</IconItem>
          <IconItem>{data.nbaños}</IconItem>
          <IconItem>{data.superficie} ft</IconItem>
        </View>
        <View style={[styles.row, styles.spaceAround]}>
          <Text style={styles.houseMontly}>${data.costemensual}/m</Text>
          <Pressable
            style={styles.favoriteButton}
            onPress={() => console.log('do favorite')}>
            <Text style={styles.favoriteButtonText}>asd</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const HouseImage = ({source, calificacion}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.houseImage} source={source} />
      <View style={styles.calificationIconContainer}>
        <IconItem style={styles}>{calificacion}</IconItem>
      </View>
    </View>
  );
};

const IconItem = ({children}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.genericIcon}>icon</Text>
      <Text style={styles.bold}>{children}</Text>
    </View>
  );
};

export default HousesList;
