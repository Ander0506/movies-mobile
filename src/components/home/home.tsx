import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {selectListMovies} from '../../features/movies/movies-slice';
import {useAppSelector} from '../app/hooks';

import {Style} from '../../styles';
import ListMovies from '../movies/list-movies';
import {RouteProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';

const Home: FC<{route: RouteProp<ParamListBase, 'Home'>; navigation: any}> = ({
  navigation,
}) => {
  const movies = useAppSelector(selectListMovies);

  return (
    <ScrollView>
      <View style={Style.Home.content}>
        <View style={Style.Home.contentHeader}>
          <Text style={Style.Home.titleHome}>
            Hello, what do you want to wach?
          </Text>
          <View style={Style.Home.contentInputSH}>
            <TextInput
              style={Style.Home.inputSearchHome}
              placeholder="Search"
              underlineColor="#00BCD4"
              theme={{
                colors: {
                  text: '#bdd8ed',
                  primary: 'transparent',
                  placeholder: '#bdd8ed',
                },
              }}
              left={
                <TextInput.Icon
                  name={() => <Icon name="search" color="white" size={20} />}
                />
              }
            />
          </View>
        </View>
        <View style={Style.Home.contentList}>
          <View style={Style.flex_1}>
            <View style={Style.Home.contentDescriptor}>
              <Text style={Style.Home.descriptor}>RECOMENDED FOR YOU</Text>
              <Text style={Style.Home.descriptor}>See all</Text>
            </View>
            <ListMovies
              movies={movies.moviesRecomended}
              navigation={navigation}
            />
          </View>
          <View style={Style.flex_1}>
            <View style={Style.Home.contentDescriptor}>
              <Text style={Style.Home.descriptor}>TOP RATED</Text>
              <Text style={Style.Home.descriptor}>See all</Text>
            </View>
            <ListMovies movies={movies.moviesTop} navigation={navigation} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
