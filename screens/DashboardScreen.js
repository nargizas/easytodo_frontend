import { Text, View, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { DUMMY_TODOITEMS } from '../data/dummy_data';
import AddFloatingButton from '../components/AddFloatingButton';
import ToDoItemsOutput from '../components/ToDoItemsOutput';
import LeftButton from '../components/LeftButton';
import RightButton from '../components/RightButton';
import { useState } from 'react';
import { getFormattedDate } from '../util/date';

function DashboardScreen({ navigation }) {
    const [currDate, setCurrDate] = useState(new Date());

    function leftButtonPressHandler() {
        setCurrDate((currDate) => {
            var dateOffset = (24 * 60 * 60 * 1000);
            var myDate = new Date();
            myDate.setTime(currDate.getTime() - dateOffset);
            return myDate;
        });
    }
    function rightButtonPressHandler() {
        setCurrDate((currDate) => {
            var dateOffset = (24 * 60 * 60 * 1000);
            var myDate = new Date();
            myDate.setTime(currDate.getTime() + dateOffset);
            return myDate;
        });;
    }

    // console.log(JSON.stringify(...DUMMY_TODOITEMS))
    function addPressHandler() {
        navigation.navigate("Suggestions")
    }
    return (
        <View style={styles.appContainer}>
            <View style={styles.dateAndButtonsContainer}>
                <LeftButton onPress={leftButtonPressHandler} />
                <Text style={styles.dateText}>{getFormattedDate(currDate)}</Text>
                <RightButton onPress={rightButtonPressHandler} />
            </View>
            <View style={styles.itemsContainer}>
                <ToDoItemsOutput toDoItems={DUMMY_TODOITEMS.filter((obj) => getFormattedDate(obj.deadline) === getFormattedDate(currDate))} />
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
    dateAndButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16
    },
    dateText: {
        color: "#f5f5f5",
        fontSize: 16,
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