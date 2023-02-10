import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";


// POST
function* sendBackpack(action) {
  console.log('sendBackpack action.payload:', action.payload);
  // Send new backpack (action.payload) to server
  // (POST /backpack)
  try {
    const response = yield axios.post('/backpack', action.payload)
    console.log(response.data);
    yield put({ type: 'RESET_BACKPACK' })
  } catch (error) {
    console.error('Error sendBackpack saga:', error)
  }
}

// GET
function* fetchBackpack() {
  try {
    const response = yield axios.get('/backpack')
    console.log('response.data fetchBackpack:', response.data)
    yield put({ type: 'SET_BACKPACK', payload: response.data })
  } catch (error) {
    console.error('Error fetchBackpack saga', error);
  }
}

function* backpackSaga() {
  yield takeLatest('SAGA/SEND_BACKPACK', sendBackpack);
  yield takeLatest('SAGA/FETCH_BACKPACK', fetchBackpack);
}


export default backpackSaga;