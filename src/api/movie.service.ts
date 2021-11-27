import axios from 'axios';
import {
  API_URL_RECOMENDED_FOR_YOU,
  API_URL_TOP_RATED,
  API_URL_MOVIE,
  API_KEY,
  LANGUAJE,
} from './default-var';

class MovieService {
  getListMoviesRecomended() {
    return axios
      .get(API_URL_RECOMENDED_FOR_YOU)
      .then(response => {
        if (response) {
          return response;
        }
      })
      .catch(error => error);
  }

  getListMoviesTopRated() {
    return axios
      .get(API_URL_TOP_RATED)
      .then(response => {
        return response;
      })
      .catch(error => error);
  }

  getMovie(movieId?: number) {
    const serviceMovie = [
      axios
        .get(
          `${API_URL_MOVIE}${movieId}?api_key=${API_KEY}&language=${LANGUAJE}`,
        )
        .then(response => {
          if (response) {
            return response.data;
          }
        })
        .catch(error => error),
      axios
        .get(
          `${API_URL_MOVIE}${movieId}/credits?api_key=${API_KEY}&language=${LANGUAJE}`,
        )
        .then(response => {
          if (response) {
            const {cast} = response.data;
            return {cast};
          }
        })
        .catch(error => error),
    ];
    return Promise.all(serviceMovie);
  }
}

export default new MovieService();
