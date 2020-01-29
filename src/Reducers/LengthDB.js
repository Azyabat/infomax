export default function Test(state = [], action) {
    switch (action.type) {
      case "Add_Length": {
        return [ action.payload];
      }
      default:
        return state;
    }
  }