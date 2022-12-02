import { FlatList, View, StyleSheet } from "react-native"
import ToDoItemList from "./ToDoItemList"

function ToDoItemsOutput({ toDoItems }) {
    // console.log(JSON.stringify(toDoItems))
    return (<View style={styles.itemsContainer}>
        <ToDoItemList toDoItems={toDoItems} />
    </View>)
}

export default ToDoItemsOutput;

const styles = StyleSheet.create({
    itemsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
})