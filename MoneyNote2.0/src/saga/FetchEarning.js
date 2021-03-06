import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import * as Action from '../actions/actionType';
import {ExecuteSQL} from './OpenDataBase';

function* handleFetchEarning(action) {
  const results = yield call(
    ExecuteSQL,
    'SELECT * FROM earning ORDER BY time_E DESC',
    [],
  );
  var len = results.rows.length;
  const data = [];

  for (let i = 0; i < len; i++) {
    let row = results.rows.item(i);
    data.push(row);
  }

  if (data?.length > 0) {
    yield put({type: Action.FETCH_EARNING_SUCCESS, data});
  } else {
    yield put({type: Action.FETCH_EARNING_FAILED, data});
  }
}

export function* watchFetchEarning() {
  console.log('SAGA_WATCH_FETCH_Spending');
  yield takeEvery(Action.FETCH_EARNING, handleFetchEarning);
}
