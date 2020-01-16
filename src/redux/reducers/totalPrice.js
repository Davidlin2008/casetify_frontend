export default function totalPrice(state = "0", action) {
  switch (action.type) {
    case "SUM_PRICE":
      return (parseInt(state) + parseInt(action.payload)).toString();
    case "SUB_PRICE":
      return (parseInt(state) - parseInt(action.payload)).toString();
    default:
      return state;
  }
}
