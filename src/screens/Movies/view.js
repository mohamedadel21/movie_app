import React, {useState, useEffect} from 'react';
import {
  Text,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';

import {getMovies} from '../../Redux/actions';

const MoviesScreen = ({navigation, movies, getMovies, loading, error}) => {
  useEffect(() => {
    getMovies('popular');
  }, []);

  useEffect(() => {}, [error]);

  const onRefresh = async () => {};

  const _keyExtractor = (item, index) => index + '';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.movies}>Movies</Text>
      
    </SafeAreaView>
  );
};

const mapStateToProps = ({movies}) => {
  return {
    movies: movies.movies,
    loading: movies.loading,
    error: movies.error,
  };
};

export default connect(mapStateToProps, {getMovies})(MoviesScreen);
