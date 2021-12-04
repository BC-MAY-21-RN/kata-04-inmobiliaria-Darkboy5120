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
  calificationIconContainer: {
    padding: 5,
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
});

export default styles;
