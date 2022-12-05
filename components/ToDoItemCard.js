import { Pressable, View, Text, StyleSheet } from "react-native";
import { getFormattedDateAndTime } from "../util/date";
import Checkbox from 'expo-checkbox';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

function ToDoItemCard({ id, title, deadline, item_status }) {
    const [isChecked, setChecked] = useState(item_status === "DONE");
    const navigation = useNavigation();

    function toDoItemPressHandler() {
        navigation.navigate("AddItem", {
            toDoItemId: id
        });
    }


    return <Pressable onPress={toDoItemPressHandler}>
        <View style={styles.toDoItemContainer}>
            <View style={styles.checkboxContainer}>
                <Checkbox style={{ width: 32, height: 32, }} value={isChecked} color="black" onValueChange={setChecked} />
            </View>
            <View>
                <Text style={styles.textItem}>{title}</Text>
                <Text style={styles.textItem}>{getFormattedDateAndTime(deadline)}</Text>
                <Text style={styles.textItem}>{item_status}</Text>

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
})