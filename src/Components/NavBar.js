import React from "react";
import menuicon from "../Img/menuicon.svg";
import { Row } from "react-grid-system";
import "../Css/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div >
      <Row align={"center"} style={{ height: "60px", background: "#FFFFFF", 
            boxShadow: '0px 1px 10px rgba(104, 121, 187, 0.1)' }}>
        <div className="DropDown">
          <img src={menuicon} alt={"logo"} style={{ marginLeft: "8px" }} />
          <div className="DropDownChild">
            <NavLink to="/auth">Авторизация</NavLink>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/">Личный кабинет</NavLink>
          </div>
        </div>
        <p className="LabelMenu">Меню</p>
      </Row>
    </div>
  );
}

export default NavBar;
