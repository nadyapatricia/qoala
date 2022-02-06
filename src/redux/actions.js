import axios from 'axios';
import { USER_MANAGEMENT_ACTIONS } from './types';
import { BASE_URL } from '../constants';

export const getUserData = () => (dispatch, getState) => {
  dispatch({
    type: USER_MANAGEMENT_ACTIONS.SET_IS_USER_DATA_LOADING,
    isUsersLoading: true,
  });

  const { currentPage, pageLimit, searchString } =
    getState().userManagement.filterValues;

  const subRoute = `?search=${encodeURIComponent(
    searchString
  )}&page=${currentPage}&limit=${pageLimit}`;

  axios
    .get(`${BASE_URL}${subRoute}`)
    .then(({ data }) => {
      // handle success
      dispatch({
        type: USER_MANAGEMENT_ACTIONS.GET_USER,
        users: data,
      });
    })
    .catch(() => {
      // handle error
      dispatch({
        type: USER_MANAGEMENT_ACTIONS.GET_USER,
        users: [],
      });
    })
    .finally(() => {
      // always executed
      dispatch({
        type: USER_MANAGEMENT_ACTIONS.SET_IS_USER_DATA_LOADING,
        isUsersLoading: false,
      });
    });
};

export const getTotalCount = () => (dispatch) => {
  axios
    .get(`${BASE_URL}`)
    .then(({ data }) => {
      // handle success
      dispatch({
        type: USER_MANAGEMENT_ACTIONS.GET_TOTAL_COUNT_USER,
        totalCount: data.length,
      });
    })
    .catch(() => {
      // handle error
      dispatch({
        type: USER_MANAGEMENT_ACTIONS.GET_TOTAL_COUNT_USER,
        totalCount: 0,
      });
    });
};

export const setFilters = (filterValuesObject) => (dispatch) => {
  dispatch({
    type: USER_MANAGEMENT_ACTIONS.SET_FILTERS,
    filterValuesObject,
  });

  let resetCurrentPage = true;
  if ('currentPage' in filterValuesObject) {
    resetCurrentPage = false;
  }
  dispatch(refreshUsersData(resetCurrentPage));
};

export const refreshUsersData =
  (resetPage = true) =>
  (dispatch) => {
    if (resetPage) {
      dispatch({
        type: USER_MANAGEMENT_ACTIONS.SET_FILTERS,
        filterValuesObject: { currentPage: 1 },
      });
    }
    dispatch(getUserData());
  };
