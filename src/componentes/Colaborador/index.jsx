import "./Colaborador.css";
import { RiDeleteBackLine } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorP, deleteuser, like } = props;
  return (
    <div className="colaborador">
      <RiDeleteBackLine className="eliminar" onClick={() => deleteuser(id)} />
      <div className="encabezado" style={{ backgroundColor: colorP }}>
        <img src="https://github.com/Hector2221.png" alt="" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav == true ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};
