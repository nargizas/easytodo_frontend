import { Text, View, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { login } from '../apis/Login'
import { GlobalStyles } from '../constants/styles';

function LoginScreen({ navigation }) {
    function pressHandler() {
        navigation.navigate("Dashboard")
        // login();
        console.log("pressed");
    }


    return (
        <View style={styles.appContainer}>
            <Text style={styles.textItem}>Hello!</Text>
            <Text style={styles.smallerTextItem}>Sign up or Log in:</Text>
            <PrimaryButton onPress={pressHandler}>Continue with Google</PrimaryButton>
        </View>
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