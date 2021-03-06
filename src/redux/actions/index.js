import {
  ADD_TO_CART,
  ADD_COLOR,
  CHOOSE_DESIGN,
  ADD_TEXT,
  CHOOSE_TEXT_COLOR,
  REMOVE_ITEM,
  SAVE_BE_ID,
} from 'redux/types';

let id = 0;
export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: id++,
      ...item,
    },
  };
};

export const removeItem = itemId => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const addColor = color => {
  return {
    type: ADD_COLOR,
    payload: color,
  };
};

export const chooseDesign = design => {
  return {
    type: CHOOSE_DESIGN,
    payload: design,
  };
};

export const chooseTextColor = color => {
  return {
    type: CHOOSE_TEXT_COLOR,
    payload: color,
  };
};

export const addText = text => {
  return {
    type: ADD_TEXT,
    payload: text,
  };
};

export const sumPrice = price => {
  return {
    type: 'SUM_PRICE',
    payload: price,
  };
};

export const subPrice = price => {
  return {
    type: 'SUB_PRICE',
    payload: price,
  };
};

export const saveId = be_id => {
  return {
    type: SAVE_BE_ID,
    payload: be_id,
  };
};
