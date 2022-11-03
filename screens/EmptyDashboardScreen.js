import { Text, View, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function EmptyDashboardScreen() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.itemsContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/empty.png')} resizeMode="center" style={styles.image} />
                </View>
                <Text style={styles.textItem}>Your list is empty!</Text>
                <Text style={styles.smallerTextItem}>Press "+" to add to-do</Text>

            </View>
        </View>
    );
}

export default EmptyDashboardScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1D7874',
        alignContent: 'center',
        justifyContent: 'center'
    },
    itemsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        margin: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200
    },
    textContainer: {
        flex: 1
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