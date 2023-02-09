const backpackReducer = (state = [], action) => {
  if (action.type === 'ADD_ITEM' && state.length < 3) {
    return [...state, action.payload];
  } else {
    return state;
  }
}

export default backpackReducer;