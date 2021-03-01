import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
} from 'react';

import { IconBaseProps } from 'react-icons';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  return (
    <InputContainer isFocused={isFocused}>
      {Icon && <Icon size={25} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

    </InputContainer>
  );
};

export default Input;
