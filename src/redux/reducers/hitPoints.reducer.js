const hitPointsReducer = (state = 100, action) => {
  if (action.type === 'SET_HIT_POINTS') {
    return action.payload;
  } else if (action.type === 'SUBTRACT_HIT_POINTS') {
    return state - action.payload;
  } else {
    return state;
  }
}

export default hitPointsReducer;