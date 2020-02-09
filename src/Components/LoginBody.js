import React from "react";
import { Container, Row } from "react-grid-system";
import alert from "../Img/alert.png";
import StylesData from "../Css/LoginBody.module.css";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Users = gql`
  {
    users {
      username
      password
    }
  }
`;

function LoginBody(props) {
  const UsersList = useQuery(Users);
  const FormSubmit = e => {
    const SelectedUser = UsersList.data.users.find(
      user => user.username === props.store.form.Login.values.Username
    );

    e.preventDefault();
    if (!SelectedUser) {
      props.AddError("Error");
    }
    if (SelectedUser) {
      if (SelectedUser.password === props.store.form.Login.values.Password) {
        localStorage.setItem("user", SelectedUser.username);
        window.location.href = "./";
      } else {
        props.AddError("Error");
      }
    }
  };

  return (
    <Container fluid={true} className={StylesData.insertContainer}>
      <Row align={"center"}>
        <h2 className={StylesData.Caption}>Вход</h2>
        <form onSubmit={FormSubmit}>
          <Field
            component="input"
            type="text"
            placeholder="Имя пользователя"
            name="Username"
            required
            style={
              props.store.Errors.LoginFormErrors[0] && {
                border: "1px solid red"
              }
            }
          />
          <Field
            component="input"
            type="password"
            placeholder="Пароль"
            name="Password"
            required
            style={
              props.store.Errors.LoginFormErrors[0] && {
                border: "1px solid red"
              }
            }
          />
          <button className={StylesData.BtnSubmit}
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
        <Row
          fluid="true"
          id="ErrorBlock"
          className={StylesData.ErrorBlock}
          align={"center"}
        >
          <img src={alert} alt="Alert" />
          <p>Неправильный логин или пароль</p>
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
