export default function Test(state = [], action) {
  switch (action.type) {
    case "ADD_LOGIN": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
