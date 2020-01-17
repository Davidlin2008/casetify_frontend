export default function saved_id(state = 0, action) {
  switch (action.type) {
    case "SAVE_BE_ID":
      return action.payload;
    default:
      return state;
  }
}
