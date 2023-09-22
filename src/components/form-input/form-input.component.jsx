import {
  InputLabel,
  Input,
  Group
} from './form-input.style';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input { ...otherProps }/>
      { label && (
        <InputLabel shrink={ false }>
          { label }
        </InputLabel>
      )}
    </Group>
  );
};

export default FormInput;