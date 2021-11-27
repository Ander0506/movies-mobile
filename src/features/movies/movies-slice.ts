import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import movieService from '../../api/movie.service';
import {RootState} from '../../components/app/store';
import {combineReducers} from 'redux';

// interface genero de pelicula
interface IGenre {
  name: string;
}

//interface para actores de la pelicula
export interface ICast {
  profile_path: string;
  name: string;
}

//interface primero en la lista estudio productor de pelicula
interface IProductionCompanies {
  name: 'string';
}
// interface de pelicula
export interface IMovie {
  backdrop_path?: string;
  id?: number;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
  vote_average?: number;
  genres?: IGenre[];
  production_companies?: IProductionCompanies[];
  cast?: ICast[];
}

// lista de peliculas recomendadas
const listMovies: CaseReducer<IMovie[], PayloadAction<IMovie[]>> = (
  movies,
  action,
) => (movies = action.payload);

//slice para lista de peliculas recomendadas
const listMoviesRecomendedSlice = createSlice({
  name: 'listMoviesRecomended',
  initialState: [] as IMovie[],
  reducers: {
    moviesRecomended: listMovies,
  },
});

//acciones para lista de peliculas recomendadas
export const {moviesRecomended} = listMoviesRecomendedSlice.actions;

//Método asíncrono para lista de peliculas
export const listMoviesAsync = (typeList: string) => async (dispatch: any) => {
  if (typeList === 'recomended') {
    const response = await movieService
      .getListMoviesRecomended()
      .catch(error => console.error(error));
    if (response && response.data && response.data.results) {
      dispatch(moviesRecomended(response.data.results));
    }
  }
  if (typeList === 'top_rated') {
    const response = await movieService
      .getListMoviesTopRated()
      .catch(error => console.error(error));
    if (response && response.data && response.data.results) {
      dispatch(moviesTop(response.data.results));
    }
  }
};

//slice para lista de peliculas mas votadas
const listMoviesTopSlice = createSlice({
  name: 'listMoviesTop',
  initialState: [] as IMovie[],
  reducers: {
    moviesTop: listMovies,
  },
});

//acciones para lista de peliculas mas votadas
export const {moviesTop} = listMoviesTopSlice.actions;

// pelicula seleccionada
const movieSelected: CaseReducer<IMovie, PayloadAction<IMovie>> = (
  movie,
  action,
) => (movie = action.payload);

//slice para pelicula selecionada
const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: {} as IMovie,
  reducers: {
    selectedMovie: movieSelected,
  },
});

//Método asíncrono para pelicula
export const selectedMovieAsync =
  (movieId?: number) => async (dispatch: any) => {
    dispatch(selectedMovie({}));
    const response = await movieService
      .getMovie(movieId)
      .catch(error => console.error(error));
    if (response) {
      const movie: IMovie = {...response[0], ...response[1]};
      dispatch(selectedMovie(movie));
    }
  };

//acciones para lista de peliculas mas votadas
export const {selectedMovie} = selectedMovieSlice.actions;

export const selectListMovies = (state: RootState) => state.movies;

// combinaciones de reducers
const reducer = combineReducers({
  moviesRecomended: listMoviesRecomendedSlice.reducer,
  moviesTop: listMoviesTopSlice.reducer,
  selectedMovie: selectedMovieSlice.reducer,
});

export default reducer;
