import { USER_MANAGEMENT_ACTIONS } from './types';

const initialState = {
  users: [],
  isUsersLoading: false,
  totalCount: 0,
  filterValues: {
    currentPage: 1,
    pageLimit: 10,
    searchString: '',
  },
};

export const userManagement = (state = initialState, action) => {
  switch (action.type) {
    case USER_MANAGEMENT_ACTIONS.GET_USER:
      return {
        ...state,
        users: action.users,
      };

    case USER_MANAGEMENT_ACTIONS.GET_TOTAL_COUNT_USER:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case USER_MANAGEMENT_ACTIONS.SET_IS_USER_DATA_LOADING:
      return {
        ...state,
        isUsersLoading: action.isUsersLoading,
      };

    case USER_MANAGEMENT_ACTIONS.SET_FILTERS: {
      const { filterValuesObject } = action;

      const newTabFilterValues = {
        ...state.filterValues,
      };

      Object.keys(filterValuesObject).forEach((key) => {
        newTabFilterValues[key] = filterValuesObject[key];
      });

      return {
        ...state,
        filterValues: {
          ...newTabFilterValues,
        },
      };
    }

    default:
      return state;
  }
};
