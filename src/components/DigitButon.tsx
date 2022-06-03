import { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ACTIONS } from '../actions/actions';

import { Styles } from '../styles/globalStyles';

interface DispatchProps {
  type: string;
  payload: { digit: string };
}

interface ButtonProps {
  digit: string;
  dispatch: ({ type, payload }: DispatchProps) => void;
  isBlue?: boolean;
  isGray?: boolean;
  isLarge?: boolean;
}

export default function DigitButton({
  digit,
  dispatch,
  isBlue,
  isGray,
  isLarge,
}: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark,
        isLarge ? Styles.btnLarge : Styles.btnNormal,
      ]}
      onPress={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === 'dark'
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {digit}
      </Text>
    </TouchableOpacity>
  );
}
