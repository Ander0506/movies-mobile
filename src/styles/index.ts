import Home from './home/style-home';
import General from './general/general';
import Movie from './movie/style-movie';
import Cast from './cast/style-cast';

// const COLOR_PRIMARY = '#5ca0d3';
// const COLOR_SECUNDARY = '#2c3848';

export const Style = {
  // Estilos generales
  ...General,

  // Estilos para el componente Home
  Home,

  // Estilos para el componente ItemMovie y ListMovies
  Movie,

  // Estilos para el componente ItemCast y ListCast
  Cast,
};
