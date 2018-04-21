import axios from '../../axios-api';
import {CREATE_NEWS_SUCCESS, FETCH_NEWS_SUCCESS} from "./actionTypes";

export const fetchNewsSuccess = news => {
  return {type: FETCH_NEWS_SUCCESS, news: news};
};

export const fetchNews = () => {
  return dispatch => {
    return axios.get('/News').then(
      response => dispatch(fetchNewsSuccess(response.data))
    );
  };
};

export const createNewsSuccess = () => {
  return {type: CREATE_NEWS_SUCCESS};
};

export const createNews = newsData => {
  return dispatch => {
    return axios.post('/News', newsData).then(
      response => dispatch(createNewsSuccess())
    );
  };
};