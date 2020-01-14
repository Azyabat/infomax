import React from "react";
import "../Css/StartPage.css";
import logo from "../Img/proceset.png";
import { Container, Row, Col } from "react-grid-system";
import NavBar from "./NavBar";

function StartPage() {
  return (
    <Container fluid={true} className="MainDivStartPage">
      <NavBar />
      <Row align={"center"} className="RowinStartPage">
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
