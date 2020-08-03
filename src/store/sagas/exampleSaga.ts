import { put, call, takeEvery, select } from 'redux-saga/effects';
import { ExampleActionTypes } from '_store/types/example/actionTypes';
import { ExamplesAPI } from '_services/API/Examples';
import { loadError, loadExamples } from '_store/types/example/actions';

export function* handleExamplesLoad() {
  try {
    const examples = yield call(ExamplesAPI.getExamples);
    yield put(loadExamples(examples));
  } catch (error) {
    yield put(loadError(error, null));
  }
}

export default function* watchExamplesLoad() {
  yield takeEvery(ExampleActionTypes.EXAMPLE_LOAD_PENDING, handleExamplesLoad);
}
