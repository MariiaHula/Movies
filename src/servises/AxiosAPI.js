import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '014d1e0498d531f96fe9aa54f119a1c9';

export const fetchTrending = async () => {
  const { data } = await axios.get('trending/all/day', {
    params: {
      api_key: `${API_KEY}`,
    },
  });

  return data.results;
};

export const fetchMovies = async query => {
  const { data } = await axios.get('search/movie', {
    params: {
      include_adult: false,
      language: 'en-US',
      page: 1,
      api_key: `${API_KEY}`,
      query: `${query}`,
    },
  });
  return data;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchActors = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
      page: 1,
      api_key: `${API_KEY}`,
    },
  });
  return data;
};
