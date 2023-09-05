import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import {MainView} from '../common';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <MainView>
        <Text>Welcome!</Text>
      </MainView>
    </SafeAreaView>
  );
}
