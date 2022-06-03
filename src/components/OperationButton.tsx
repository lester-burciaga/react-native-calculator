import { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ACTIONS } from '../actions/actions';

import { Styles } from '../styles/globalStyles';

interface DispatchProps {
  type: string;
  payload: { operation: string };
}

interface ButtonProps {
  operation: string;
  dispatch: ({ type, payload }: DispatchProps) => void;
  isBlue?: boolean;
  isGray?: boolean;
  isLarge?: boolean;
}

export default function OperationButton({
  operation,
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
      onPress={() =>
        dispatch({
          type:
            operation === 'AC'
              ? ACTIONS.CLEAR
              : operation === '='
              ? ACTIONS.EVALUATE
              : operation === '⌫'
              ? ACTIONS.DELETE_DIGIT
              : ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        })
      }
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
        {operation}
      </Text>
    </TouchableOpacity>
  );
}
