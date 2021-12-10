import React, {useState} from 'react';
import DataHouses from '../data/houses.json';
import styles from '../styles/HousesList';
//import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
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

const FavoriteButton = ({favorite}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  return (
    <Pressable
      style={[
        styles.favoriteButton,
        isFavorite ? styles.isFavorite : styles.isNotFavorite,
      ]}
      onPress={() => setIsFavorite(!isFavorite)}>
      <Icon name="star" size={20} color="#fff" />
    </Pressable>
  );
};

const House = ({data}) => {
  return (
    <View style={[styles.houseContainer, styles.row]}>
      <HouseImage source={data.image} calificacion={data.calificacion} />
      <View style={styles.houseInfoContainer}>
        <Text style={styles.houseHeader}>{data.nombre}</Text>
        <IconItem name="share-outline" styleType={0}>
          {data.direccion}
        </IconItem>
        <View style={styles.spaceBetween}>
          <IconItem name="star-outline" styleType={1}>
            {data.nhabitantes}
          </IconItem>
          <IconItem name="star-outline" styleType={1}>
            {data.nbaños}
          </IconItem>
          <IconItem name="star-outline" styleType={1}>
            {data.superficie} ft
          </IconItem>
        </View>
        <View style={[styles.row, styles.spaceAround]}>
          <Text style={styles.houseMontly}>${data.costemensual}/m</Text>
          <FavoriteButton favorite={data.esfavorito} />
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
        <IconItem name="star-outline" styleType={2}>
          {calificacion}
        </IconItem>
      </View>
    </View>
  );
};

const IconItem = ({children, name, styleType}) => {
  const stylesSets = [
    {icon: styles.iconItemIcon0, text: styles.iconItemText0},
    {icon: styles.iconItemIcon1, text: styles.iconItemText1},
    {icon: styles.iconItemIcon2, text: styles.iconItemText2},
  ];
  return (
    <View style={styles.iconRow}>
      <Icon
        style={[stylesSets[styleType].icon, styles.genericIcon]}
        name={name}
        size={20}
      />
      <Text style={stylesSets[styleType].text}>{children}</Text>
    </View>
  );
};

export default HousesList;
