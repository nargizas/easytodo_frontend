import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import DateTimeInput from "./DateTimeInput"
import PrimaryButton from '../../components/PrimaryButton';

function ToDoItemForm({ suggestedTitle, cancelHandler, confirmHandler, submitButtonLabel, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        title: defaultValues ? defaultValues.title : suggestedTitle || '',
        deadline: defaultValues ? defaultValues.deadline : new Date(),
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

    const [date, setDate] = useState(inputValues.deadline);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                'deadline': currentDate
            };
        });
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(true);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    function submitHandler() {
        const toDoItemDate = {
            title: inputValues.title,
            deadline: new Date(inputValues.deadline),
            item_status: inputValues.item_status
        }

        confirmHandler(toDoItemDate);
    }

    return <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
            <Input label="Title" textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, "title"),
                value: inputValues.title
            }} />
            <DateTimeInput date={date} show={show} dateInputConfig={{
                onChange: onChange,
                testID: "dateTimePicker",
                value: date,
                mode: mode,
                is24Hour: true
            }} showDatepicker={showDatepicker} showTimepicker={showTimepicker} />
        </View>

        <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={cancelHandler}>Cancel</PrimaryButton>
            <PrimaryButton onPress={submitHandler}>{submitButtonLabel}</PrimaryButton>
        </View>
    </View>
}

export default ToDoItemForm;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    inputContainer: {
        flex: 2
    },
    buttonsContainer: {
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        alignContent: 'flex-end',
        flex: 1,
        marginBottom: 8
    },
})