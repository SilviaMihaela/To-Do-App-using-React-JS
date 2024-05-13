import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="primary-btn"
      type={props.type}
      onClick={props.onClickFunction}
      disabled={props.isValid === undefined ? false : !props.isValid}
    >
      {props.textBtn}
    </button>
  );
};

export default Button;
