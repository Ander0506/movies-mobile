import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {ICast} from '../../features/movies/movies-slice';
import {Style} from '../../styles/';

const ItemCast: FC<{cast: ICast}> = ({cast}) => {
  return (
    <View style={Style.Cast.content}>
      <View style={Style.Cast.contentImage}>
        <Image
          style={Style.Cast.castImage}
          source={{
            uri:
              cast.profile_path === null
                ? 'https://vowstreet.com/img/avatar-default.png'
                : `https://image.tmdb.org/t/p/w200${cast.profile_path}`,
          }}
        />
      </View>
      <View style={Style.Cast.contentTextCast}>
        <Text style={Style.Cast.textCast} numberOfLines={2}>
          {cast.name}
        </Text>
      </View>
    </View>
  );
};

export default ItemCast;
