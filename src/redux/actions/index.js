// Action Creator
export const addToCart = item => {
  // Action
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};
