import React from "react";
import { Container, Row, Col } from "react-grid-system";
import NavBar from "./NavBar";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import StylesData from "../Css/Profile.module.css";
import GetUser from "../Query/GetUser";

const Users = gql`
  {
    users {
      username
      email
      password
      fname
      sname
    }
  }
`;

function Profile(props) {
  let UserInfo = GetUser();
  console.log(UserInfo);
  if (UserInfo){
    document.getElementById("FnameInput").value = UserInfo.fname;
    document.getElementById("SnameInput").value = UserInfo.sname;
    document.getElementById("EmailInput").value = UserInfo.email;
    document.getElementById("PassInput").value = UserInfo.password;
  }
  return (
    <Container fluid={true} className={StylesData.MainContainer}>
      <NavBar />
      <Row justify="end">
        <Col sm={7} xs={8} className={StylesData.Caption}>
          {UserInfo && UserInfo.fname} {UserInfo && UserInfo.sname}. Редактирование
        </Col>
        <Col align="end" sm={3} xs={4}>
          <button className={StylesData.SaveBtn}>Сохранить и вернуть</button>
        </Col>
      </Row>
      <Row>
        <Col sm={2} xs={12} style={{ paddingRight: "24px" }}>
          <Row className={StylesData.PublicData}>
            <p>Общие данные</p>
          </Row>
        </Col>
        <Col sm={10} xs={12} className={StylesData.MainWorkPlace}>
          <Row className={StylesData.Rows}>
            <label>Имя</label>
            <input id="FnameInput"></input>
          </Row>
          <Row className={StylesData.Rows}>
            <label>Фамилия</label>
            <input id="SnameInput"></input>
          </Row>
          <hr />
          <Row className={StylesData.Rows}>
            <label>Электронная почта</label>
            <input id="EmailInput"></input>
          </Row>
          <Row className={StylesData.Rows}>
            <label>Введите пароль</label>
            <input type="password" id="PassInput"></input>
          </Row>
          <button className={StylesData.ChangePass}>Сменить пароль</button>
        </Col>
      </Row>
    </Container>
  );
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(Profile);
