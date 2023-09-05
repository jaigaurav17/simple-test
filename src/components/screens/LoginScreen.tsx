import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {TextInput, Button, Card} from 'react-native-paper';
import {LoginViewModel} from '../../viewmodels';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Spacer, ErrorText, MainView} from '../common';

export function LoginScreen() {
  const loginMessage = useSelector((state: RootState) => state.auth.error);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await LoginViewModel.login(username, password);
  };

  return (
    <SafeAreaView>
      <MainView>
        <Card>
          <Card.Content>
            {loginMessage ? <ErrorText>{loginMessage}</ErrorText> : null}
            <TextInput
              label="Username"
              value={username}
              mode="outlined"
              onChangeText={text => setUsername(text)}
            />
            <Spacer height={'10px'} />
            <TextInput
              label="Password"
              value={password}
              mode="outlined"
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <Spacer height={'10px'} />
            <Button mode="contained" onPress={handleLogin}>
              Login
            </Button>
          </Card.Content>
        </Card>
      </MainView>
    </SafeAreaView>
  );
}
