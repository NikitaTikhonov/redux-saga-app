import { all } from 'redux-saga/effects';
import exampleSaga from '_store/sagas/exampleSaga';



export default function*  rootSaga() {
  yield all([exampleSaga()]);
}
