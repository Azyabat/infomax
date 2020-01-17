import React from "react";
import "../Css/AuthBody.css";
import NavBar from "./NavBar";
import logo from "../Img/proceset.png";
import { Container, Row, Col } from "react-grid-system";
import LoginBody from "./LoginBody";
import RegistrationBody from "./RegistrationBody";
import { Route } from "react-router-dom";

function AuthBody() {
  return (
    <Container fluid={true} className="MainDivStartPage">
      <NavBar />
      <Row align={"center"} className="RowinAuthBody">
        <Col>
          <img
            src={logo}
            alt={"logo"}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Col>
      </Row>
      <Row align={"start"} className="RowInWorkPlace">
        <Col align={"center"}>
          <div className="MainContainer">
            <Route exact path="/auth" render={() => <LoginBody />} />
            <Route exact path="/registration" component={RegistrationBody} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthBody;
