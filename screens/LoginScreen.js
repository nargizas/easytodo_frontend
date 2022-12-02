import { Text, View, StyleSheet, TextInput, Linking } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { login } from '../apis/Login'
import { GlobalStyles } from '../constants/styles';
import { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'
import axios from 'axios';
WebBrowser.maybeCompleteAuthSession();

function LoginScreen({ navigation }) {
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "12610545685-gv1c203f0tbula3jdj8m6bnlo69qeap7.apps.googleusercontent.com",
    })

    useEffect(() => {
        if (response?.type === "success") {
            setAccessToken(response.authentication.accessToken);
            navigation.navigate("Dashboard")
        }
        console.log(accessToken)
    }, [response]);

    async function getUserData() {
        // let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // })

        let userInfoResponse = await axios.post('https://easytodo.p-e.kr:443/login', { accessToken })
        console.log(JSON.stringify(userInfoResponse))
        navigation.navigate("Dashboard")
        // console.log("getUserInfo")
        // userInfoResponse.json().then(
        //     data => {
        //         setUserInfo(data);
        //         console.log(JSON.stringify(data));
        //     })
    }
    function showUserInfo() {
        if (userInfo) {
            <Text>Welcome {userInfo.name}</Text>
        }
    }

    // async function pressHandler() {
    //     console.log("request link");
    //     let url = await login();
    //     console.log(JSON.stringify(url));
    //     let result = await WebBrowser.openBrowserAsync(url);
    //     // setURL(url);
    // }

    return (
        <>
            <View style={styles.appContainer}>
                {showUserInfo()}
                <Text style={styles.textItem}>Hello!</Text>
                <Text style={styles.smallerTextItem}>Sign up or Log in:</Text>
                <PrimaryButton onPress={accessToken ? getUserData : () => { promptAsync({ showInRevents: true }) }}>{accessToken ? "See my To-Do List" : "Continue with Google"}</PrimaryButton>
                <Text></Text>
            </View>

        </>
    );
}





export default LoginScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        backgroundColor: GlobalStyles.colors.primary,
        alignContent: 'center',
        justifyContent: 'center'
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
    }
})