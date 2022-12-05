import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import DateTimePicker from "./DateTimePicker"

function ToDoItemForm({ suggestedTitle }) {
    const [inputValues, setInputValues] = useState({
        title: suggestedTitle,
        deadline: new Date(),
        item_status: "IN_PROGRESS"
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    return <View>
        <Input label="Title" textInputConfig={{
            onChangeText: inputChangeHandler.bind(this, "title"),
            value: inputValues.title
        }} />
    </View>
}

export default ToDoItemForm;

const styles = StyleSheet.create({

})