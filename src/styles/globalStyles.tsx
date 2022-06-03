import { StyleSheet } from 'react-native';
import { myColors } from './colors';

export const Styles = StyleSheet.create({
  // Button
  btnNormal: {
    width: 72,
    height: 72,
    borderRadius: 24,
  },
  btnLarge: {
    width: 160,
    height: 72,
    borderRadius: 24,
  },
  btnBlue: {
    backgroundColor: myColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnDark: {
    backgroundColor: myColors.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    backgroundColor: myColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    backgroundColor: myColors.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
  
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
});
