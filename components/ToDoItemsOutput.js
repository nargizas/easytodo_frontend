import { FlatList, View, StyleSheet } from "react-native"
import { DUMMY_TODOITEMS } from "../data/dummy_data"
import ToDoItemList from "./ToDoItemList"

function ToDoItemsOutput({ toDoItems }) {
    return (<View style={styles.itemsContainer}>
        <ToDoItemList toDoItems={DUMMY_TODOITEMS} />
    </View>)
}

export default ToDoItemsOutput;

const styles = StyleSheet.create({
    itemsContainer: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        // borderColor: 'blue',
        // borderWidth: 2,
    },
})