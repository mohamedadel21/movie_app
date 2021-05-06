import React, {useState, useEffect} from 'react';
import {
  Text,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import MovieItem from '../../components/MovieItem';
import {getMovies, getGenres} from '../../Redux/actions';

const MoviesScreen = ({
  navigation,
  movies,
  getMovies,
  loading,
  error,
  getGenres,
  genres,
}) => {
  const moviesTypes = [
    {name: 'Popular', id: 'popular'},
    {name: 'Top Rated', id: 'top_rated'},
    {name: 'Upcoming', id: 'upcoming'},
  ];
  const [moviesType, setMovieType] = useState(moviesTypes[0]);
  
  useEffect(() => {
    getGenres();
    getMovies(moviesTypes[0].id);
  }, []);

  useEffect(() => {}, [error]);

  const onRefresh = async () => {
    getMovies(moviesType.id);
  };

  const renderItem = ({item}) => {
    const genresList = [];
    genres?.filter(genre => {
      item?.genre_ids?.filter(item => {
        if (item == genre.id) {
          genresList.push(genre);
        }
      });
    });
    item.genresList = genresList;
    return (
      <MovieItem
        item={item}
        title={item?.title}
        date={item?.release_date}
        image={item?.poster_path}
        rating={Math.round(parseFloat(item?.vote_average) * 10) + '%'}
        genre_ids={genresList}
        onPress={() => {
          navigation.navigate('MovieDetails', {movie: item});
        }}
      />
    );
  };

  const movieTypeItem = ({item}) => {
    let style =
      moviesType.id == item.id
        ? {
            button: styles.activeButton,
            text: styles.activeButtonText,
          }
        : {
            button: styles.inActiveButton,
            text: styles.inactiveButtonText,
          };

    return (
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          getMovies(item.id);
          setMovieType(item);
        }}>
        <Text style={style.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const _keyExtractor = (item, index) => index + '';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.movies}>Movies</Text>

      <FlatList
        style={styles.typesFlatList}
        horizontal
        data={moviesTypes}
        renderItem={movieTypeItem}
        keyExtractor={_keyExtractor}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={_keyExtractor}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({movies, genres}) => {
  return {
    movies: movies.movies,
    loading: movies.loading,
    error: movies.error,
    genres: genres.genres,
  };
};

export default connect(mapStateToProps, {getMovies, getGenres})(MoviesScreen);
