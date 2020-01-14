import React from "react";
import { Container, Row } from "react-grid-system";
import '../Css/RegistrationBody.css';

function RegistrationBody(){
    return(
        <Container fluid={true} className="insertContainer">
        <Row align={"center"}>
        <h2>Регистрация нового пользователя</h2>
          <input type="text" placeholder="Имя пользователя" />
          <input type="text" placeholder="Электронная почта"/>
          <input type="text" placeholder="Введите пароль"/>
          <input type="text" placeholder="Повторите пароль"/>
          <button> Применить и войти </button>
        </Row>
      </Container>
    );
}

export default RegistrationBody;