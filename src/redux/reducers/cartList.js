const initialState = [];

export default function cartList(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // 새로운 상품(객체)을 기존 장바구니(배열)에 추가
      return [...state, action.payload];
    default:
      return state;
  }
}
