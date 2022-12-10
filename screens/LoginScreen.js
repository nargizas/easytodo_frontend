/* eslint-disable max-len */
import { Text, View, StyleSheet } from 'react-native';
import {
  React, useState, useEffect, useContext,
} from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import GlobalStyles from '../constants/styles';
import PrimaryButton from '../components/PrimaryButton';
import { ToDoItemsContext } from '../store/todoitems-context';

WebBrowser.maybeCompleteAuthSession();

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textItem: {
    textAlign: 'center',
    color: GlobalStyles.colors.grey,
    fontSize: 24,
    fontWeight: 'bold',
    margin: 2,
  },
  smallerTextItem: {
    textAlign: 'center',
    color: GlobalStyles.colors.grey,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },
});

function LoginScreen({ navigation }) {
  const toDoItemsCtx = useContext(ToDoItemsContext);
  const [accessToken, setAccessToken] = useState();

  // eslint-disable-next-line no-unused-vars
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '12610545685-gv1c203f0tbula3jdj8m6bnlo69qeap7.apps.googleusercontent.com',
    androidClientId: '12610545685-3jcmbapem9d7mqgb83np4icvsgq3heuh.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    const userInfoResponse = await axios.post('https://easytodo.p-e.kr/login', {
      access_token: accessToken,
    });

    // eslint-disable-next-line no-unused-vars
    const toDoListResponse = await axios.get('https://easytodo.p-e.kr/todoitem', {
      headers: {
        Cookie: `sid=${userInfoResponse.data.token.sid}`,
      },
    });

    // console.log(toDoListResponse.data);

    for (let i = 0; i < toDoListResponse.data.length; i += 1) {
      const toDoItem = toDoListResponse.data[i];
      toDoItemsCtx.setToDoItem(toDoItem.id, {
        title: toDoItem.title,
        deadline: new Date(toDoItem.deadline),
        status: toDoItem.status,
      });
    }
    navigation.navigate('Dashboard', {
      sid: `sid=${userInfoResponse.data.token.sid}`,
    });
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.textItem}>{accessToken ? '' : 'Hello!'}</Text>
      <Text style={styles.smallerTextItem}>{accessToken ? 'You are logged in!' : 'Sign up or Log in:'}</Text>
      <PrimaryButton onPress={accessToken ? getUserData : () => { promptAsync({ showInRevents: true }); }}>{accessToken ? 'See my To-Do List' : 'Continue with Google'}</PrimaryButton>
    </View>
  );
}

export default LoginScreen;
