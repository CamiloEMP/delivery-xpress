import "../Header/Header.css";
import "./HomeUsers.css";
import logo from "../../img/Logo.png";
import img from "../../img/Courier.png";
import { IoMenu } from "react-icons/io5";
import { OpenMenuMobile } from "../../Modals/OpenMenuMobile";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { FormLogin } from "../LoginRegister/FormLogin";
import { FormRegister } from "../LoginRegister/FormRegister";
import { Login } from "../../Modals/Login";
import { Register } from "../../Modals/Register";

export const HomeUsers = () => {
  const {
    openMenu,
    onOpenMenu,
    openModal,
    onClickBtn,
    userError,
    registerCorrect,
  } = useContext(Context);

  return (
    <>
      {userError && (
        <div className="alert alert-danger">Correo o contraseña invalido</div>
      )}
      {registerCorrect && (
        <div className="alert alert-success">
          Inicia sesión para comprobar tus datos
        </div>
      )}
      <header className="header-UIP">
        <img
          src={logo}
          alt=""
          style={{ width: "340px", margin: "20px 0 0 140px" }}
        />
        <div className="IoMenu-container">
          <IoMenu className="IoMenu" onClick={onOpenMenu} />
          {!!openMenu && <OpenMenuMobile />}
        </div>
        <div className="UserMenu-UIP" style={{ width: "280px" }}>
          <button onClick={onClickBtn} style={{ width: "130px" }}>
            Login
          </button>
          {!!openModal.login && (
            <Login>
              <FormLogin />
            </Login>
          )}
          <button onClick={onClickBtn} style={{ width: "130px" }}>
            Sign up
          </button>
          {!!openModal.signUp && (
            <Register>
              <FormRegister />
            </Register>
          )}
        </div>
      </header>
      <main className="main-home-users">
        <aside>
          <p>Un Servicio</p>
          <p>de Entrega</p>
          <p>en el que</p>
          <p>Confiar</p>
          <span>Aprovecha nuestro servicio, ¡ES EL MEJOR!</span>
        </aside>
        <aside>
          <img src={img} alt="" />
        </aside>
      </main>
    </>
  );
};
