// Action Creator
let id = 0;
export const addToCart = item => {
  // Action
  return {
    type: "ADD_TO_CART",
    payload: {
      id: id++,
      ...item
    }
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    payload: id
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

export const sumPrice = price => {
  return {
    type: "SUM_PRICE",
    payload: price
  };
};

export const subPrice = price => {
  return {
    type: "SUB_PRICE",
    payload: price
  };
};
