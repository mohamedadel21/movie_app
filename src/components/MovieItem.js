import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Colors from '../utils/Colors';
import {ScaleWidth, ScaleHeight} from '../utils/Dimensions';
import {connect} from 'react-redux';
const {width} = Dimensions.get('window');
import {Image} from 'react-native-elements';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieItem = ({image, title, date, rating, onPress, genre_ids}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.genreItem}>
        <Text>{item?.name}</Text>
      </View>
    );
  };
  const _keyExtractor = (item, index) => index + '';
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        resizeMode="cover"
        source={{uri: imageBaseUrl + image}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <FlatList
          key={'_'}
          style={styles.flatList}
          numColumns={3}
          data={genre_ids}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
        />
      </View>

      <Text style={styles.rating}>{rating}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - ScaleWidth(25),
    padding: ScaleWidth(15),
    backgroundColor: Colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    elevation: 2,
    marginHorizontal: ScaleWidth(25),
    marginVertical: ScaleWidth(10),
    borderRadius: ScaleWidth(10),
  },
  image: {
    height: ScaleWidth(140),
    width: ScaleWidth(80),
    borderRadius: ScaleWidth(10),
  },
  title: {
    fontSize: ScaleWidth(16),
    marginLeft: ScaleHeight(14),
    color: Colors.black,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  date: {
    fontSize: ScaleWidth(13),
    color: Colors.darkGrey,
    marginTop: ScaleHeight(10),
    marginLeft: ScaleWidth(14),
    textAlign: 'left',
  },

  rating: {
    fontSize: ScaleWidth(15),
    color: Colors.green,
    fontWeight: 'bold',
    marginTop: ScaleHeight(2),
    marginLeft: ScaleWidth(14),
    position: 'absolute',
    bottom: ScaleHeight(15),
    right: ScaleWidth(15),
  },
  flatList: {
    marginTop: ScaleHeight(10),
    marginLeft: ScaleHeight(10),
  },
  genreItem: {
    height: ScaleHeight(30),
    borderRadius: ScaleWidth(15),
    backgroundColor: Colors.grey,
    padding: ScaleWidth(5),
    margin: ScaleWidth(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({genres}) => {
  return {};
};
export default connect(mapStateToProps)(MovieItem);
