export default function selectedDesign(state = "Custom Text", action) {
  switch (action.type) {
    case "CHOOSE_DESIGN":
      return action.payload;
    default:
      return state;
  }
}
