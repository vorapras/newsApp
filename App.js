import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {Provider} from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const loadFonts = () => {
  return Font.loadAsync({
    'PlayfairDisplay-Black': require('./assets/fonts/PlayfairDisplay-Black.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
});
