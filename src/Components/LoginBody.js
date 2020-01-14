import React from "react";
import { Container, Row } from "react-grid-system";
import alert from "../Img/alert.png";
import '../Css/LoginBody.css';

function LoginBody(){
    return(
        <Container fluid={true} className="insertContainer">
              <Row align={"center"}>
                <h2>Вход</h2>
                <input type="text" placeholder="Имя пользователя" />
                <input type="text" placeholder="Пароль"/>
                <button> Войти в систему </button>
              </Row>
              <Row fluid={true} id="ErrorBlock" align={"center"}>
                <img src={alert} />
                <p>Неправильная почта или пароль</p>
              </Row>
            </Container>
    );
}

export default LoginBody;