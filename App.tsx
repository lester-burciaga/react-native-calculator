import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';

import MyKeyboard from './src/components/MyKeyboard';

import { myColors } from './src/styles/colors';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: 'black' }]
        }
      >
        <StatusBar style='auto' />
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
