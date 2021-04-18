import {all, fork} from 'redux-saga/effects';
import {watchFetchEarning} from './FetchEarning';
import {watchFetchSpending} from './FetchSpending';
import {watchFetchCustomData} from './Modul2Saga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchEarning),
    fork(watchFetchSpending),
    fork(watchFetchCustomData),
  ]);
}
