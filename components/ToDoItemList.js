import { View, Image, Text, FlatList, StyleSheet, Pressable } from "react-native";
// import { DUMMY_TODOITEMS } from "../data/dummy_data"
import ToDoItemCard from "./ToDoItemCard";

function renderToDoItem(toDoItemData) {
    return (
        <ToDoItemCard {...toDoItemData.item} />
    )
}


function ToDoItemList({ toDoItems }) {
    return (
        <View style={styles.container}>
            <FlatList data={toDoItems}
                renderItem={renderToDoItem}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                    () => (

                        <View style={styles.emptyListContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/images/empty.png')} resizeMode="center" style={styles.image} />
                            </View>
                            <Text style={styles.textItem}>Your list is empty!</Text>
                            <Text style={styles.smallerTextItem}>Press "+" to add to-do</Text>
                        </View>

                    )
                }

            />
        </View>
    )
}

export default ToDoItemList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 8,
        // borderColor: 'red',
        // borderWidth: 2,

    },
    emptyListContainer: {
        marginVertical: 32,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'white',
        // borderWidth: 2,
    },
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