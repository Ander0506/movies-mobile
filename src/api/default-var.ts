const URL_DEV = 'https://api.themoviedb.org/3/';
const URL_REAL = URL_DEV;
export const API_KEY = '8981713b59984adae4356a50a9aa0688';
export const LANGUAJE = 'en-US';

export const API_URL_RECOMENDED_FOR_YOU = `${URL_REAL}movie/popular?api_key=${API_KEY}&language=${LANGUAJE}`;
export const API_URL_TOP_RATED = `${URL_REAL}movie/top_rated?api_key=${API_KEY}&language=${LANGUAJE}`;
export const API_URL_MOVIE = `${URL_REAL}movie/`;
export const API_URL_CAST_MOVIE = `${URL_REAL}movie/`;
