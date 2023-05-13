import "./CampoTexto.css";
export const CampoTexto = (props) => {
  //Destructuracion
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="campo">
      <label>{props.titulo}</label>
      <input
        type={type}
        placeholder={props.placeholder + "..."}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};
