import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  iconRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genericIcon: {
    marginRight: 10,
  },
  spaceAround: {
    justifyContent: 'space-between',
  },
  favoriteButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 30,
    height: 30,
    color: 'white',
    borderRadius: 25,
  },
  isFavorite: {
    backgroundColor: 'red',
  },
  isNotFavorite: {
    backgroundColor: 'green',
  },
  calificationIconContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    backgroundColor: 'gold',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
  imageContainer: {
    display: 'flex',
  },
  root: {
    marginBottom: 50,
  },
  iconItemIcon0: {
    color: 'black',
  },
  iconItemText0: {
    color: 'gray',
  },
  iconItemIcon1: {
    color: 'gray',
  },
  iconItemText1: {
    color: 'black',
    fontWeight: 'bold',
  },
  iconItemIcon2: {
    color: 'rgb(150, 40, 200)',
  },
  iconItemText2: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default styles;
