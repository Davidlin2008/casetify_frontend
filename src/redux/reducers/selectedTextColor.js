export default function selectedTextColor(state = "#ffffff", action) {
  switch (action.type) {
    case "CHOOSE_TEXT_COLOR":
      return action.payload;
    default:
      return state;
  }
}
