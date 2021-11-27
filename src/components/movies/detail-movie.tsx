import {RouteProp} from '@react-navigation/core';
import React, {FC} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {RootStackParamList} from '../app/App';
import {useAppSelector} from '../app/hooks';
import {selectListMovies} from '../../features/movies/movies-slice';
import {Chase} from 'react-native-animated-spinkit';

import {Style} from '../../styles';
import {Rating} from 'react-native-ratings';
import ListCast from '../cast/list-cast';

const DetailMovie: FC<{
  route: RouteProp<RootStackParamList, 'DetailMovie'>;
  navigation: any;
}> = () => {
  const movies = useAppSelector(selectListMovies);
  if (Object.keys(movies.selectedMovie).length !== 0) {
    const {selectedMovie} = movies;
    const date = new Date(selectedMovie.release_date!);
    return (
      <ScrollView>
        <View style={Style.Home.content}>
          <View style={Style.Movie.contentImageBg}>
            <Image
              style={Style.Movie.ImageBg}
              source={{
                uri: `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`,
              }}
            />
          </View>
          <View style={Style.Movie.contentList}>
            <Text numberOfLines={2} style={Style.Movie.title}>
              {selectedMovie.title}
            </Text>
            <View style={Style.Movie.contentBR}>
              <TouchableHighlight
                onPress={() => Alert.alert('clicked watch now')}>
                <View style={Style.Movie.btnWacthNow}>
                  <Text style={Style.Movie.textBtnWacthNow}>WATCH NOW</Text>
                </View>
              </TouchableHighlight>
              <Rating
                imageSize={15}
                tintColor="#2c3848"
                ratingCount={5}
                readonly
                startingValue={selectedMovie.vote_average! / 2}
              />
            </View>
            <View style={Style.Movie.contentDescription}>
              <Text style={Style.Movie.description}>
                {selectedMovie.overview}
              </Text>
            </View>
            <ListCast castList={selectedMovie.cast!} />
            <View style={Style.Movie.contentFooter}>
              <View style={Style.Movie.contentDescriptionFooter}>
                <Text style={Style.Movie.textDescriptorFooter}>Studio</Text>
                <Text style={Style.Movie.textDescriptionFooter}>
                  {selectedMovie.production_companies![0].name}
                </Text>
              </View>
              <View style={Style.Movie.contentDescriptionFooter}>
                <Text style={Style.Movie.textDescriptorFooter}>Genre</Text>
                <Text style={Style.Movie.textDescriptionFooter}>
                  {selectedMovie.genres?.map(item => item.name).join(', ')}
                </Text>
              </View>
              <View style={Style.Movie.contentDescriptionFooter}>
                <Text style={Style.Movie.textDescriptorFooter}>Release</Text>
                <Text style={Style.Movie.textDescriptionFooter}>
                  {date.getFullYear()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={Style.contentLoad}>
      <Chase color="white" />
    </View>
  );
};

export default DetailMovie;
