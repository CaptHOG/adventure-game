const hitPointsReducer = (state = 100, action) => {
  if (action.type === 'SUBTRACT_HIT_POINTS') {
    let newAmount = state - 50;
    if (newAmount <= 0) {
      newAmount = 0;
      // alert('YOU WIN!')
    }
    return newAmount;
  } else {
    return state;
  }
}

export default hitPointsReducer;