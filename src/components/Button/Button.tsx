import React from 'react';
import {ButtonText, ButtonTouchableOpacity} from './Button.styles';
interface IButton {
  label: string;
  onPress: () => void;
  primary?: boolean;
}

export const Button = ({label, onPress, primary = false}: IButton) => {
  return (
    <ButtonTouchableOpacity $primary={primary} onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </ButtonTouchableOpacity>
  );
};
