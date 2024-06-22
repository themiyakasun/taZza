import { GET_CATEGORIES } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();
    dispatch({ type: GET_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
