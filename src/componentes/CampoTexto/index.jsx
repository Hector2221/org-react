import "./CampoTexto.css";
export const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input
        type="tex"
        placeholder={props.placeholder + "..."}
        required={props.required}
      />
    </div>
  );
};
