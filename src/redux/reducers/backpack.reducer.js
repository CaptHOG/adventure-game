const backpackReducer = (state = [], action) => {
  if (action.type === 'ADD_ITEM' && state.length < 3) {
    return [...state, action.payload];
  } else if (action.type === 'SET_BACKPACK') {
    return action.payload;
  } else if (action.type === 'RESET_BACKPACK') {
    return [];
  } else {
    return state;
  }
}

export default backpackReducer;