import React, {useEffect} from 'react';
import {
  Text,
  ActivityIndicator,
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Image, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import styles from './style';
import backImage from '../../../assets/movieDetails/back.png';
import {getMovieCredits} from '../../Redux/actions';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MoviesDetailsScreen = ({navigation, getMovieCredits, credits, route}) => {
  const movie = route.params.movie;

  useEffect(() => {
    getMovieCredits(movie.id);
  }, []);

  const genreItem = ({item}) => {
    return (
      <View style={styles.genreItem}>
        <Text>{item?.name}</Text>
      </View>
    );
  };

  const creditItem = ({item}) => {
    return (
      <View style={styles.creditItem}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: imageBaseUrl + item.profile_path,
          }}
        />
        <Text>{item?.name}</Text>
      </View>
    );
  };

  const _keyExtractor = (item, index) => index + '';

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={backImage} style={styles.backImage} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          resizeMode="cover"
          source={{uri: imageBaseUrl + movie.poster_path}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.rating}>
          {Math.round(parseFloat(movie?.vote_average) * 10) + '%'}
        </Text>
        <Text style={styles.OverviewText}>Overview</Text>
        <Text style={styles.Overview}>{movie.overview}</Text>
        <Text style={styles.creditsText}>Credits</Text>
        <FlatList
          key={'_'}
          style={styles.flatList}
          horizontal
          data={credits || []}
          renderItem={creditItem}
          keyExtractor={_keyExtractor}
        />
        <Text style={styles.genresText}>Genres</Text>

        <FlatList
          key={'#'}
          style={styles.flatList}
          horizontal
          data={movie.genresList || []}
          renderItem={genreItem}
          keyExtractor={_keyExtractor}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({movieCredits}) => {
  return {
    credits: movieCredits.credits,
  };
};

export default connect(mapStateToProps, {getMovieCredits})(MoviesDetailsScreen);
