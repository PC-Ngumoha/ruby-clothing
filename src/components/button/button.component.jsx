import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
} from './button.style';

export const BUTTON_CLASSES = {
  base: 'base-button',
  google: 'google-sign-in',
  inverted: 'inverted'
};

const getButton = (buttonType=BUTTON_CLASSES.base) => (
  {
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.google]: GoogleSignInButton,
    [BUTTON_CLASSES.inverted]: InvertedButton,
  }[buttonType]
);

const Button = ({ children, buttonType, ...extras }) => {
  const CustomButton = getButton(buttonType);
  
  return (
    <CustomButton { ...extras }>
      { children }
    </CustomButton>
  );
};

export default Button;