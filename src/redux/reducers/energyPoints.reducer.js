const energyPointsReducer = (state = 200, action) => {
  if (action.type === 'SUBTRACT_ENERGY_COST') {
    const newAmountFromItemUse = state - action.payload;
    if (newAmountFromItemUse <= 0) {
      alert('GAME OVER');
    }
    return newAmountFromItemUse;
  } else if (action.type === 'SUBTRACT_ENERGY_DAMAGE') {
    const newAmountFromDamage = state - 10;
    if (newAmountFromDamage <= 0) {
      alert('GAME OVER');
    }
    return newAmountFromDamage;
  } else {
    return state;
  }
}

export default energyPointsReducer;