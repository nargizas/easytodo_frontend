import { Pressable, View, Text, StyleSheet } from "react-native";
import { getFormattedDateAndTime } from "../util/date";
import Checkbox from 'expo-checkbox';
import { useEffect, useState } from "react";

function ToDoItemCard({ title, deadline, status }) {
    const [isChecked, setChecked] = useState(status === "DONE");

    return <Pressable>
        <View style={styles.toDoItemContainer}>
            <View style={styles.checkboxContainer}>
                <Checkbox value={isChecked} color="black" onValueChange={setChecked} />
            </View>
            <View>
                <Text style={styles.textItem}>{title}</Text>
                <Text style={styles.textItem}>{getFormattedDateAndTime(deadline)}</Text>
                <Text style={styles.textItem}>{status}</Text>

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