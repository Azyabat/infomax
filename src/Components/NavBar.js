import React from "react";
import menuicon from "../Img/menuicon.svg";
import { Row } from "react-grid-system";
import StylesData from "../Css/NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Row
        align={"center"}
        style={{
          height: "60px",
          background: "#FFFFFF",
          boxShadow: "0px 1px 10px rgba(104, 121, 187, 0.1)"
        }}
      >
        <div className={StylesData.DropDown}>
          <img src={menuicon} alt={"logo"} style={{ marginLeft: "8px" }} />
          <div className={StylesData.DropDownChild}>
            <NavLink to="/">На главную</NavLink>
            {!localStorage.getItem("user") && (
              <NavLink to="/auth">Авторизация</NavLink>
            )}
            {!localStorage.getItem("user") && (
              <NavLink to="/registration">Регистрация</NavLink>
            )}
            {localStorage.getItem("user") && (
              <NavLink to="/profile">Личный кабинет</NavLink>
            )}
            {localStorage.getItem("user") && (
              <a
                href=""
                onClick={() => {
                  window.location.href = "./";
                  localStorage.removeItem("user");
                }}
              >
                Выход
              </a>
            )}
          </div>
        </div>
        <p className={StylesData.LabelMenu}>Меню</p>
      </Row>
    </div>
  );
}

export default NavBar;
