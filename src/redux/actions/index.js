// Action Creator
export const addToCart = item => {
  // Action
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};

export const addColor = color => {
  return {
    type: "ADD_COLOR",
    payload: color
  };
};

export const chooseDesign = design => {
  return {
    type: "CHOOSE_DESIGN",
    payload: design
  };
};

export const addText = text => {
  return {
    type: "ADD_TEXT",
    payload: text
  };
};
