const hitPointsReducer = (state = 100, action) => {
  if (action.type === 'SUBTRACT_HIT_POINTS') {
    const newAmount = state - action.payload;
    if (newAmount <= 0) {
      alert('YOU WIN!');
    }
    return newAmount;
  } else {
    return state;
  }
}

export default hitPointsReducer;