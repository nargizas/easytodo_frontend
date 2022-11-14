import { Text, View, StyleSheet, TextInput, FlatList, Image } from 'react-native';

import { DUMMY_TODOITEMS } from '../data/dummy_data';
import AddFloatingButton from '../components/AddFloatingButton';
import ToDoItemsOutput from '../components/ToDoItemsOutput';

function DashboardScreen({ navigation }) {
    function addPressHandler() {
        navigation.navigate("Suggestions")
    }
    return (
        <View style={styles.appContainer}>
            {/* <Text>Dashboard</Text> */}
            <View style={styles.itemsContainer}>
                <ToDoItemsOutput />
            </View>
            <View style={styles.bottomBar}>
                <Text style={styles.selectedModeText}>Daily</Text>
                <Text style={styles.modeText}>Weekly</Text>
                <Text style={styles.modeText}>Monthly</Text>
                <AddFloatingButton onPress={addPressHandler} />
            </View>
        </View>
    );
}

export default DashboardScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#1D7874',
        // alignContent: 'center',
        // justifyContent: 'center'
    },
    itemsContainer: {
        flex: 2,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        // borderColor: 'white',
        // borderWidth: 2,
    },
    bottomBar: {
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 16,
        justifyContent: 'center',
        alignContent: 'flex-end',
        marginBottom: 16
    },
    selectedModeText: {
        flex: 1,
        color: "#f5f5f5",
        fontSize: 16,
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    modeText: {
        flex: 1,
        color: "#a3a3a3",
        fontSize: 16,
        justifyContent: 'center',
        textAlignVertical: 'center'
    }
})