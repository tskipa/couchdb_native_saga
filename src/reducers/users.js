import * as Types from '../actions/action_types';

const DEFAULT_STATE = {
  users: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case Types.USER_RECEIVED: {
      return {...state, user: action.user};
    }
    case Types.LOAD_USER_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};
