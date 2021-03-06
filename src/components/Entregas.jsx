import { Link } from "react-router-dom";
import { Header } from "./Header";
import Group169 from "../img/Group169.png";
import "../styles/Entregados1.css";

export const Entregas = () => {
    return (
      <>
      <Header />
        <div className="container1">
            <div className="contenedor-Entregas">
                <div className="titulo-Entregas">
                    <p>Envios entregados</p>
                </div>
                <div className="grande-Entregas">
                    <div className="contenedor-tarjetas-Entrega">
                        <div className="imagen-e">
                            <img src= {Group169} alt="Imagen"/>
                        </div>
                        <div className="Descripcion-Entregas">
                            <p>Número de guía: 12455QJE</p>
                            <p>Dirección de envío: Transversak 17 # 66 - 87</p>
                            <p>Nombre: Sussan López</p>
                                <Link to="/Entregas2">
                                Ver más...
                                </Link>
                        </div>  
                    </div>
                    <div className="contenedor-tarjetas-Entrega">
                        <div className="imagen-e">
                            <img src= {Group169} alt="Imagen"/>
                        </div>
                        <div className="Descripcion-Entregas">
                            <p>Número de guía: 94321PRE</p>
                            <p>Dirección de envío: Calle  15 # 18 - 19  Sur</p>
                            <p>Nombre: Juanita Alimaña</p>
                            <Link to="/Entregas2">Ver más...</Link>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }