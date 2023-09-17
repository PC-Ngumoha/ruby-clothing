import './button.style.scss';

const BUTTON_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

const Button = ({ children, buttonType, ...extras }) => {
  return (
    <button
      className={`button-container ${ BUTTON_CLASSES[buttonType] }`}
      { ...extras }>
      { children }
    </button>
  );
};

export default Button;