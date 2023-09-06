import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import {HomeScreen, LoginScreen, PostDetailScreen} from '../components/screens';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  const isSignedIn = useSelector((state: RootState) => state.auth.isSignedIn);

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={PostDetailScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
