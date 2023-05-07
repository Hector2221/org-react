import "./CampoTexto.css";
export const CampoTexto = (props) => {
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        type="tex"
        placeholder={props.placeholder + "..."}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};
