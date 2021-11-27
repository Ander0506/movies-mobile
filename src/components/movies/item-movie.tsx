import React, {FC} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {IMovie} from '../../features/movies/movies-slice';
import {Rating} from 'react-native-ratings';

import {Style} from '../../styles';

const ItemMovie: FC<{
  movie: IMovie;
  onDetailMovie: (idMovie?: number) => void;
}> = ({movie, onDetailMovie}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onDetailMovie(movie.id)}>
      <View style={Style.Movie.content}>
        <View style={Style.Movie.contentImage}>
          <Image
            style={Style.Movie.Image}
            source={{
              uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
            }}
          />
        </View>
        <View style={Style.Movie.contentTextDescriptor}>
          <Text numberOfLines={2} style={Style.Movie.textDescriptor}>
            {movie.title}
          </Text>
        </View>
        <Rating
          imageSize={15}
          tintColor="#2c3848"
          ratingCount={5}
          readonly
          startingValue={movie.vote_average! / 2}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemMovie;
