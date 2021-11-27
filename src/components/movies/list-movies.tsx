import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {IMovie} from '../../features/movies/movies-slice';
import {useAppDispatch} from '../app/hooks';
import {selectedMovieAsync} from '../../features/movies/movies-slice';

import {Style} from '../../styles';
import ItemMovie from './item-movie';
import {Chase} from 'react-native-animated-spinkit';

const ListMovies: FC<{movies: IMovie[]; navigation: any}> = ({
  movies,
  navigation,
}) => {
  const dispatch = useAppDispatch();

  const onDetailMovie = (movieId?: number) => {
    (async () => {
      dispatch(selectedMovieAsync(movieId));
    })();
    navigation.navigate('DetailMovie', {movieId});
  };

  if (movies.length !== 0) {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((item: IMovie) => {
          return (
            <ItemMovie
              movie={item}
              key={item.id}
              onDetailMovie={onDetailMovie}
            />
          );
        })}
      </ScrollView>
    );
  }
  return (
    <View style={Style.contentLoad}>
      <Chase color="white" />
    </View>
  );
};

export default ListMovies;
