export default function AddError(
  state = { LoginFormErrors: [], RegistrationFormErrors: [] },
  action
) {
  switch (action.type) {
    case "ADD_ERROR_LOGIN_FORM": {
      return { LoginFormErrors: action.payload };
    }
    case "ADD_ERROR_REGISTRATION_FORM": {
      return { RegistrationFormErrors: action.payload };
    }
    default:
      return state;
  }
}
