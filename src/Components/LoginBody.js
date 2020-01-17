import React from "react";
import { Container, Row } from "react-grid-system";
import alert from "../Img/alert.png";
import "../Css/LoginBody.css";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

function LoginBody(props) {
  const FormSubmit = e => {
    e.preventDefault();
    if (!props.store.form.Login.values) {
      props.AddError("Error");
    } else {
      props.AddError("");
    }
  };
  return (
    <Container fluid={true} className="insertContainer">
      <Row align={"center"}>
        <h2>Вход</h2>
        <form onSubmit={FormSubmit}>
          <Field
            component="input"
            type="text"
            placeholder="Имя пользователя"
            name="Username"
            required
            style={
              props.store.Errors.RegistrationFormErrors[0] && {
                border: "1px solid red"
              }
            }
          />
          <Field
            component="input"
            type="text"
            placeholder="Пароль"
            name="Password"
            required
            style={
              props.store.Errors.RegistrationFormErrors[0] && {
                border: "1px solid red"
              }
            }
          />
          <button
            type="submit"
            onClick={() => {
              props.AddLogin();
            }}
          >
            {" "}
            Войти в систему{" "}
          </button>
        </form>
      </Row>
      {props.store.Errors.LoginFormErrors[0] && (
        <Row fluid="true" id="ErrorBlock" align={"center"}>
          <img src={alert} />
          <p>Неправильная почта или пароль</p>
        </Row>
      )}
    </Container>
  );
}

LoginBody = reduxForm({
  form: "Login"
})(LoginBody);

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    AddLogin: () => {
      dispatch({ type: "ADD_LOGIN", payload: "Gi" });
    },
    AddError: error => {
      dispatch({ type: "ADD_ERROR_LOGIN_FORM", payload: error });
    }
  })
)(LoginBody);
