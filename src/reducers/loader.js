import * as Types from '../actions/action_types';


export default (state = false, action) => {
  switch (action.type) {
    case Types.ASYNC_REQUEST: {
      return true
    }
    case Types.INCREMENT: {
      return false
    }
    default: {
      return state
    }
  }
};
