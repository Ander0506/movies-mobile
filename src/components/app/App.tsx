import React, {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppDispatch} from '../app/hooks';
import {listMoviesAsync} from '../../features/movies/movies-slice';
import Home from '../home/home';
import DetailMovie from '../movies/detail-movie';

export type RootStackParamList = {
  Home: undefined;
  DetailMovie: {movieId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(listMoviesAsync('recomended'));
      dispatch(listMoviesAsync('top_rated'));
    })();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="DetailMovie"
          options={{
            title: '',
            headerTransparent: true,
            headerShadowVisible: false,
            headerTintColor: 'white',
          }}
          component={DetailMovie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
