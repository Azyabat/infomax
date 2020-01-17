import { combineReducers } from "redux";
import AddLogin from "./AddLogin";
import AddError from "./AddError";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  Errors:AddError,
  login: AddLogin,
  form: formReducer
});
