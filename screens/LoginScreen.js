import { Text, View, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function LoginScreen({ navigation }) {
    function pressHandler() {
        navigation.navigate("EmptyDashboard")
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
        backgroundColor: '#1D7874',
        alignContent: 'center',
        justifyContent: 'center'
    },
    textItem: {
        textAlign: 'center',
        color: "#f5f5f5",
        fontSize: 24,
        fontWeight: 'bold',
        margin: 2,
    },
    smallerTextItem: {
        textAlign: 'center',
        color: "#f5f5f5",
        fontSize: 20,
        fontWeight: 'bold',
        margin: 2,
    }
})