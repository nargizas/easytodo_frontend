import { Text, View, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function DashboardScreen() {
    return (
        <View style={styles.appContainer}>
            <Text>Today</Text>
        </View>
    );
}

export default DashboardScreen;

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