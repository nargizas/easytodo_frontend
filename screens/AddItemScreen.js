import { Text, View, StyleSheet, Button, Platform } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useState, useLayoutEffect, useContext } from 'react';
import { getFormattedDate, getFormattedTime } from '../util/date';
import IconButton from '../components/IconButton';
import PrimaryButton from '../components/PrimaryButton';
import { ToDoItemsContext } from '../store/todoitems-context';
import ToDoItemForm from '../components/AddITem/ToDoItemForm';

function AddItemScreen({ route, navigation }) {
    const editedToDoItemId = route.params?.toDoItemId;
    const isEditing = !!editedToDoItemId;
    const toDoItemsCtx = useContext(ToDoItemsContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit To-do item" : "Add a new item"
        });
    }, [navigation, isEditing]);



    function deleteToDoItemHandler() {
        toDoItemsCtx.deleteToDoItem(editedToDoItemId);
        navigation.goBack();

    }
    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            toDoItemsCtx.updateToDoItem(editedToDoItemId, { title: "Test Update Do Homework", deadline: new Date("2022-12-04"), item_status: "DONE" });
        } else {
            toDoItemsCtx.addToDoItem({ title: "Test Do Homework", deadline: new Date(), item_status: "DONE" });
        }

        navigation.navigate("Dashboard");
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <ToDoItemForm />
            </View>
            {/* <View> */}
            <View style={styles.buttonsContainer}>
                <PrimaryButton onPress={cancelHandler}>Cancel</PrimaryButton>
                <PrimaryButton onPress={confirmHandler}>{isEditing ? 'Edit' : 'Add'}</PrimaryButton>
                {isEditing &&
                    <View style={styles.deleteContainer}>
                        <IconButton icon="trash" color={GlobalStyles.colors.grey} size={36} onPress={deleteToDoItemHandler} />
                    </View>}
            </View>
            {/* </View> */}
        </View>
    );
}

export default AddItemScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#1D7874',
    },
    deleteContainer: {
        alignItems: 'center'
    },
    buttonsContainer: {
        flex: 1,
        marginVertical: 8
    },
    inputContainer: {
        flex: 2,
    },

    datetimeText: {
        color: "#f5f5f5",
        fontSize: 16,
    },
    textContainer: {
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#f5f5f5",
        marginVertical: 8,
        elevation: 2
    },
    wordText: {
        fontSize: 16,
    },
    customText: {
        color: "#a3a3a3",
        fontSize: 16
    },
    FlairText: {
        flex: 1,
        color: "#f5f5f5",
        fontSize: 24,
        justifyContent: 'space-around',
        textAlignVertical: 'flex-start'
    },
})