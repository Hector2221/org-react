import "./Colaborador.css";
import { RiDeleteBackLine } from "react-icons/ri";
export const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id } = props.datos;
  const { colorP, deleteuser } = props;
  return (
    <div className="colaborador">
      <RiDeleteBackLine className="eliminar" onClick={() => deleteuser(id)} />
      <div className="encabezado" style={{ backgroundColor: colorP }}>
        <img src="https://github.com/Hector2221.png" alt="" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};
