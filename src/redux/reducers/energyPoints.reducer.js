const energyPointsReducer = (state = 200, action) => {
  if (action.type === 'SET_ENERGY') {
    return state - action.payload;
  } else {
    return state;
  }
}

export default energyPointsReducer;