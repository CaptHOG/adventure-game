import { takeLatest } from "redux-saga/effects";

function* fetchItems() {
  try {

  } catch (error) {
    console.error('Error fetchItems saga:', error);
  }
}

function* itemsSaga() {
  yield takeLatest('SAGA/FETCH_ITEMS', fetchItems);
}

export default itemsSaga;