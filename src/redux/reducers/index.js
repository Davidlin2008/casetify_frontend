import { combineReducers } from "redux";

const initialState = [];

const cartList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // 새로운 상품(객체)을 기존 장바구니(배열)에 추가
      return [...state, action.payload];
    default:
      return state;
  }
};

const selectedColor = (state = "제트 블랙", action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return action.payload;
    default:
      return state;
  }
};

const selectedDesign = (state = "", action) => {
  switch (action.type) {
    case "CHOOSE_DESIGN":
      return action.payload;
    default:
      return state;
  }
};

const addedText = (state = "ABC", action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  cartList,
  selectedColor,
  selectedDesign,
  addedText
});
