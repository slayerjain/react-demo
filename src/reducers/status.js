const statusReducerDefaultState = {
  loaded: false,
};

export default (state = statusReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_EXPENSES':
      console.log('setting loaded to true');
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};
