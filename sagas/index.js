
import { all } from 'redux-saga/effects';
import Saga from './Saga';

export default function* rootSaga() {
  yield all([
    Saga(),
    
  ]);
}
