import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchItems() {
  try {
    const response = yield axios.get('/items')
    console.log('response.data fetchItems:', response.data);
    yield put({ type: 'SET_ITEMS', payload: response.data })
  } catch (error) {
    console.error('Error fetchItems saga:', error);
  }
}

function* itemsSaga() {
  yield takeLatest('SAGA/FETCH_ITEMS', fetchItems);
}

export default itemsSaga;