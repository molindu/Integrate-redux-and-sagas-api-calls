import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../actions/Actions';
import { FETCH_DATA_REQUEST } from '../actions/types';
import api from '../api';

function* fetchData() {
  try {
    const data = yield call(api.fetchData);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default function* Saga() {
  yield fork(watchFetchData);
  // Add other watchers here using fork
}
