export default function Test(state = [], action) {
    switch (action.type) {
      case "goMutation": {
        return [...state, action.payload];
      }
      default:
        return state;
    }
  }