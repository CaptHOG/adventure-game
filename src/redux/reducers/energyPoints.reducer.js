const energyPointsReducer = (state = 200, action) => {
  if (action.type === 'SUBTRACT_ENERGY_COST') {
    // state - action.payload
    const newAmountFromItemUse = state - 0;
    if (newAmountFromItemUse <= 0) {
      // alert('GAME OVER');
    }
    return newAmountFromItemUse;
  } else if (action.type === 'SUBTRACT_ENERGY_DAMAGE') {
    // state - 10
    const newAmountFromDamage = state - 0;
    if (newAmountFromDamage <= 0) {
      // alert('GAME OVER');
    }
    return newAmountFromDamage;
  } else {
    return state;
  }
}

export default energyPointsReducer;