import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// POST
function* createCharacter(action) {
  console.log('createCharacter action.payload:', action.payload);
  // Send new character (action.payload) to server
  // (POST /userCharacters)
  try {
    const newCharacter = action.payload;
    const response = yield axios.post('/userCharacters', action.payload)
    console.log(response.data);

    yield put({ type: 'SAGA/FETCH_USER_CHARACTERS' })
  } catch (error) {
    console.error('Error createCharacter saga:', error)
  }
}

// GET
function* fetchUserCharacters() {
  try {
    // response.data is the array from the userCharacters reducer
    const response = yield axios.get('/userCharacters')
    console.log('response.data fetchUserCharacters:', response.data)
    yield put({ type: 'SET_USER_CHARACTERS', payload: response.data })
  } catch (error) {
    console.error('Error fetchUserCharacters saga', error);
  }
}

function* deleteCharacter(action) {
  try {
    const response = yield axios.delete(`/userCharacters/${action.payload.characterId}`)

    const idToSend = {
      userId: action.payload.user_id,
      characterId: action.payload.characterId
    }

    yield put({ type: 'DELETE_CHARACTER', payload: idToSend })
    // yield put to bring the DOM back in sync
    yield put({ type: 'SAGA/FETCH_USER_CHARACTERS' })
  } catch (error) {
    console.error('Error deleteCharacter saga:', error)
  }
}

function* userCharactersSaga() {
  yield takeLatest('SAGA/FETCH_USER_CHARACTERS', fetchUserCharacters);
  yield takeLatest('SAGA/CREATE_CHARACTER', createCharacter);
  yield takeLatest('SAGA/DELETE_CHARACTER', deleteCharacter);
}

export default userCharactersSaga;