const userCharactersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload}
    case 'SET_INFO':
      return {...state, info: action.payload}
    default:
      return state;
  }
}

export default userCharactersReducer;