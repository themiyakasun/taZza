import {
  FETCH_ALL,
  FETCH_BY_CAT,
  FETCH_BY_SEARCH,
} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCat = (category) => async (dispatch) => {
  try {
    if (category === 'all') {
      const { data } = await api.fetchProducts();
      dispatch({ type: FETCH_ALL, payload: data });
    } else {
      const { data } = await api.fetchProductByCat(category);
      dispatch({ type: FETCH_BY_CAT, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductBySearch = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
