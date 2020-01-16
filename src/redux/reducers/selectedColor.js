export default function selectedColor(state = "제트 블랙", action) {
  switch (action.type) {
    case "ADD_COLOR":
      return action.payload;
    default:
      return state;
  }
}
