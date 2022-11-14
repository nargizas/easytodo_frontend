import { Pressable, View, Text, StyleSheet } from "react-native";

function ToDoItemCard({ title, deadline, status }) {
    return <Pressable>
        <View style={styles.toDoItemContainer}>
            <Text style={styles.textItem}>{title}</Text>
            <Text style={styles.textItem}>{deadline.toString()}</Text>
            <Text style={styles.textItem}>{status}</Text>
        </View>
    </Pressable>

}

export default ToDoItemCard;

const styles = StyleSheet.create({
    toDoItemContainer: {
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#f5f5f5",
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2
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
    textItem: {
        fontSize: 16,
    },
})