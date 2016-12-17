import {combineReducers} from 'redux';

import users from './users';
import counter from './counter';
import isLoading from './loader';

export default combineReducers({
  users,
  counter,
  isLoading
});
