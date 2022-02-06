import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userManagement } from './reducer';

const reducers = combineReducers({
  userManagement,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
