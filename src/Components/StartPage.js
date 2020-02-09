import React from "react";
import StylesData from "../Css/StartPage.module.css";
import logo from "../Img/proceset.png";
import { Container, Row, Col } from "react-grid-system";
import NavBar from "./NavBar";

function StartPage() {
  sessionStorage.removeItem("user");
  return (
    <Container fluid={true} className={StylesData.MainDivStartPage}>
      <NavBar />
      <Row align={"center"} className={StylesData.RowinStartPage}>
        <Col>
          <img
            src={logo}
            alt={"logo"}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default StartPage;
