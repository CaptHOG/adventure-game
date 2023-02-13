import axios from "axios"
import { takeLatest, put } from "redux-saga/effects"

// GET selectedCharacter
function* fetchSelectedCharacter() {
  try {
    const response = yield axios.get('/selectedCharacter')
    console.log('fetchSelectedCharacter:', response.data)
    yield put({ type: 'SET_SELECTED_CHARACTER', payload: response.data })
  } catch (error) {
    console.error('Error fetchSelectedCharacter saga:', error)
  }
}

function* postSelectedCharacter(action) {
  try {
    const characterToPost = action.payload;
    const response = yield axios.post('/selectedCharacter', characterToPost);
    yield put({ type: 'SAGA/FETCH_SELECTED_CHARACTER' })
  } catch (error) {
    console.log('Error postSelectedCharacter saga:', error)
  }
}

// PUT
function* updateCharacterPoints(action) {
  try {
    const response = yield axios.put(`/selectedCharacter/${action.payload.characterId}`)

    console.log('action.payload updateCharacterPoints:', action.payload);

    yield put({ type: 'UPDATE_CHARACTER', payload: action.payload })
    // yield put to bring the DOM back in sync
    yield put({ type: 'SAGA/FETCH_USER_CHARACTERS' })
  } catch (error) {
    console.error('Error updateCharacter saga:', error)
  }
}

function* selectedCharacterSaga() {
  yield takeLatest('SAGA/FETCH_SELECTED_CHARACTER', fetchSelectedCharacter);
  yield takeLatest('SAGA/POST_SELECTED_CHARACTER', postSelectedCharacter);
  yield takeLatest('SAGA/UPDATE_ENERGY_POINTS', updateCharacterPoints);
}


export default selectedCharacterSaga;