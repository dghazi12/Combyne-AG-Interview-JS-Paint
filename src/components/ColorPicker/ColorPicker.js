import "./ColorPicker.css";

const ColorPicker = (props) => {
  return (
    <button
      className={`button ${props.classColor}`}
      name={`${props.classColor}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default ColorPicker;
