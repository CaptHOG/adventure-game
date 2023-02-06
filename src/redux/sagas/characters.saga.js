import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchCharacters() {
  try {
    // response.data is the array from the characters reducer
    const response = yield axios.get('/api/character')
    console.log('response.data fetchCharacters:', response.data)
    yield put({ type: 'SET_CHARACTERS', payload: response.data })
  } catch (error) {
    console.error('Error fetchCharacters characters.saga.js', error);
  }
}

function* charactersSaga() {
  yield takeLatest('FETCH_CHARACTERS', fetchCharacters);
}

export default charactersSaga;