import React from "react";
import { Container, Row } from "react-grid-system";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "../Css/RegistrationBody.css";
import alert from "../Img/alert.png";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

function RegistrationBody(props) {
  const goMutation = () =>{
    
  }

  const FormSubmit = e => {
    var FormRegistration = props.store.form.Registration.values;
    e.preventDefault();
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(FormRegistration.Email)
    ) {
      props.Add_Error("Некорректная электронная почта");
    } else {
      props.Add_Error("");
    }
    if (FormRegistration.Password !== FormRegistration.Second_Password) {
      props.Add_Error("Пароли не совпадают");
    }
    if (
      FormRegistration.Password.length < 5 ||
      FormRegistration.Password.length > 15
    ) {
      props.Add_Error("Некорректный пароль!");
    }
    if (
      FormRegistration.Username.length < 5 ||
      FormRegistration.Username.length > 15
    ) {
      props.Add_Error("Некорректное имя пользователя!");
    }
    if (props.Add_Error === "") {
    }
  };
  return (
      <Container fluid={true} className="insertContainer">
        <Row align={"center"}>
          <h2>Регистрация нового пользователя</h2>
          <form onSubmit={FormSubmit}>
            <Field
              component="input"
              required
              name="Username"
              type="text"
              placeholder="Имя пользователя"
              style={
                props.store.Errors.RegistrationFormErrors[0] && {
                  border: "1px solid red"
                }
              }
            />
            <Field
              component="input"
              required
              name="Email"
              type="text"
              placeholder="Электронная почта"
              style={
                props.store.Errors.RegistrationFormErrors[0] && {
                  border: "1px solid red"
                }
              }
            />
            <Field
              component="input"
              required
              name="Password"
              type="password"
              placeholder="Введите пароль"
              style={
                props.store.Errors.RegistrationFormErrors[0] && {
                  border: "1px solid red"
                }
              }
            />
            <Field
              component="input"
              required
              name="Second_Password"
              type="password"
              placeholder="Повторите пароль"
              style={
                props.store.Errors.RegistrationFormErrors[0] && {
                  border: "1px solid red"
                }
              }
            />
            <button type="submit"> Применить и войти </button>
          </form>
        </Row>
        {props.store.Errors.RegistrationFormErrors[0] && (
          <Row fluid="true" id="ErrorBlock" align={"center"}>
            <img src={alert} />
            <p>{props.store.Errors.RegistrationFormErrors}</p>
          </Row>
        )}
        
      </Container>
      
  );
}

RegistrationBody = reduxForm({
  form: "Registration"
})(RegistrationBody);

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    Add_Error: payload_text => {
      dispatch({ type: "ADD_ERROR_REGISTRATION_FORM", payload: payload_text });
    }
  })
)(RegistrationBody);
