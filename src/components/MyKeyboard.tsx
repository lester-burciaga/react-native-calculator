import { useReducer } from 'react';
import { View, Text } from 'react-native';

import { reducer, formatOperand } from '../actions/reducers';
import DigitButton from './DigitButon';
import OperationButton from './OperationButton';

import { Styles } from '../styles/globalStyles';

export default function MyKeyboard() {
  const [{ currentOperand = '', previousOperand, operation }, dispatch] =
    useReducer(reducer, {});

  const firstNumberDisplay = () => {
    formatOperand(currentOperand);
    if (currentOperand === '' || currentOperand === null) {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (currentOperand && currentOperand.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{currentOperand}</Text>;
    }

    if (
      currentOperand &&
      currentOperand.length > 5 &&
      currentOperand.length < 8
    ) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {currentOperand}
        </Text>
      );
    }
    if (currentOperand && currentOperand.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {currentOperand}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {formatOperand(previousOperand)} {operation}
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <OperationButton operation='AC' isLarge isGray dispatch={dispatch} />
        <OperationButton operation='%' isBlue dispatch={dispatch} />
        <OperationButton operation='÷' isBlue dispatch={dispatch} />
      </View>
      <View style={Styles.row}>
        <DigitButton digit='7' dispatch={dispatch} />
        <DigitButton digit='8' dispatch={dispatch} />
        <DigitButton digit='9' dispatch={dispatch} />
        <OperationButton operation='×' isBlue dispatch={dispatch} />
      </View>
      <View style={Styles.row}>
        <DigitButton digit='4' dispatch={dispatch} />
        <DigitButton digit='5' dispatch={dispatch} />
        <DigitButton digit='6' dispatch={dispatch} />
        <OperationButton operation='-' isBlue dispatch={dispatch} />
      </View>
      <View style={Styles.row}>
        <DigitButton digit='1' dispatch={dispatch} />
        <DigitButton digit='2' dispatch={dispatch} />
        <DigitButton digit='3' dispatch={dispatch} />
        <OperationButton operation='+' isBlue dispatch={dispatch} />
      </View>
      <View style={Styles.row}>
        <DigitButton digit='.' dispatch={dispatch} />
        <DigitButton digit='0' dispatch={dispatch} />
        <OperationButton operation='⌫' dispatch={dispatch} />
        <OperationButton operation='=' isBlue dispatch={dispatch} />
      </View>
    </View>
  );
}
