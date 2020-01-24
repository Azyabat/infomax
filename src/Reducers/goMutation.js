export default function Test(state = [], action) {
    switch (action.type) {
      case "goMutation": {
        return [action.payload];
      }
      default:
        return state;
    }
  }