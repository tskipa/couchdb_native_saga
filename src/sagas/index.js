import {takeEvery, delay} from 'redux-saga';
import {put} from 'redux-saga/effects';

import * as Types from '../actions/action_types';
import {fetchUser} from '../api/github';

export function* incrementAsync() {
  yield put({type: Types.ASYNC_REQUEST});
  yield delay(2000);
  yield put({type: Types.INCREMENT});
}

export function* loadUser(user) {
  try {
    const currentUser = yield fetchUser(user);
    yield put({type: Types.USER_RECEIVED, currentUser});
  } catch (err) {
    yield put({type: Types.LOAD_USER_FAILURE, err});
  }
}

export function* watchIncrementAsync() {
  yield takeEvery(Types.INCREMENT_ASYNC, incrementAsync);
}

export function* watchLoadUser(user) {
    yield takeEvery(Types.LOAD_USER, loadUser);
}
