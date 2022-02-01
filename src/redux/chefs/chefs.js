const ADD_CHEF = 'ADD_CHEF';
const REMOVE_CHEF = 'REMOVE_CHEF';

export const addChef = (payload) => ({
  type: ADD_CHEF,
  payload,
});

export const removeChef = (id) => ({
  type: REMOVE_CHEF,
  id,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CHEF:
      return [...state, ...action.payload];
    case REMOVE_CHEF:
      return state.filter((chef) => chef.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
