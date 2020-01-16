export default function addedText(state = "ABC", action) {
  switch (action.type) {
    case "ADD_TEXT":
      return action.payload;
    default:
      return state;
  }
}
