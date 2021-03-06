import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Modal.css";

export const OpenMenuMobile = () => {
  return ReactDOM.createPortal(
    <div className="Modal-background">
      <ul className="container-menu-mobile">
        <li><Link className="menu-mobile-list" to="/">Home</Link></li>
        <li><Link className="menu-mobile-list" to="/">Username</Link></li>
        <li><Link className="menu-mobile-list" to="/">Log out</Link></li>
      </ul>
    </div>,
    document.getElementById("Modal_icon_mobile")
  );
};

