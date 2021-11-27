import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import ItemCast from './item-cast';
import {ICast} from '../../features/movies/movies-slice';

const ListCast: FC<{castList: ICast[]}> = ({castList}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {castList.map(item => {
        return <ItemCast cast={item} key={item.name} />;
      })}
    </ScrollView>
  );
};

export default ListCast;
