import { Pressable, View, Text, StyleSheet } from "react-native";
import { getFormattedTime } from "../util/date";
import Checkbox from 'expo-checkbox';
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ToDoItemsContext } from '../store/todoitems-context';

function ToDoItemCard({ id, title, deadline, item_status }) {
    const toDoItemsCtx = useContext(ToDoItemsContext);
    const [isChecked, setChecked] = useState(item_status === "DONE");
    const navigation = useNavigation();

    function toDoItemPressHandler() {
        navigation.navigate("AddItem", {
            toDoItemId: id
        });
    }

    function onChange() {
        setChecked(!isChecked)
        // console.log(isChecked)
        const toDoItemData = {
            title: title,
            deadline: deadline,
            item_status: isChecked ? "IN_PROGRESS" : "DONE"
        }
        toDoItemsCtx.updateToDoItem(id, toDoItemData);
    }

    return <Pressable onPress={toDoItemPressHandler}>
        <View style={styles.toDoItemContainer}>
            <View style={styles.checkboxContainer}>
                <Checkbox style={{ width: 32, height: 32, }} value={isChecked} color="black" onValueChange={onChange} />
            </View>
            <View>
                <Text style={item_status === "DONE" ? [styles.textItem, { textDecorationLine: 'line-through' }] : styles.textItem}>{title}</Text>
                <Text style={item_status === "DONE" ? [styles.textItem, { textDecorationLine: 'line-through' }] : styles.textItem}>{getFormattedTime(deadline)}</Text>
                <Text style={item_status === "DONE" ? [styles.textItem, styles.doneText] : [styles.textItem, styles.inProgressText]}>{item_status === "DONE" ? "Done" : "In progress"}</Text>

            </View>
        </View>
    </Pressable>

}

export default ToDoItemCard;

const styles = StyleSheet.create({
    toDoItemContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#f5f5f5",
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2
    },
    checkboxContainer: {
        marginRight: 8,
    },
    textItem: {
        fontSize: 16,
    },
    doneText: {
        color: "green"
    },
    inProgressText: {
        color: "orange"
    }
})