/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import {
  View, StyleSheet, Alert, Platform,
} from 'react-native';
import Input from './Input';
import DateTimeInput from './DateTimeInput';
import PrimaryButton from '../PrimaryButton';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 2,
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    alignContent: 'flex-end',
    flex: 1,
    marginBottom: 8,
  },
});

function ToDoItemForm({
  suggestedTitle, cancelHandler, confirmHandler, submitButtonLabel, defaultValues,
}) {
  const [inputValues, setInputValues] = useState({
    title: defaultValues ? defaultValues.title : suggestedTitle || '',
    deadline: defaultValues ? defaultValues.deadline : new Date(),
    status: 'IN_PROGRESS',
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [inputIdentifier]: enteredValue,
    }));
  }

  const [date, setDate] = useState(inputValues.deadline);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      deadline: currentDate,
    }));
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
    const toDoItemData = {
      title: inputValues.title,
      deadline: new Date(inputValues.deadline),
      status: inputValues.status,
    };

    const titleIsValid = toDoItemData.title.trim().length > 0;
    if (!titleIsValid) {
      Alert.alert('Invalid input', 'Please check your title');
      return;
    }
    confirmHandler(toDoItemData);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Input
          label="Title"
          textInputConfig={{
            onChangeText: inputChangeHandler.bind(this, 'title'),
            value: inputValues.title,
          }}
        />
        <DateTimeInput
          date={date}
          show={show}
          dateInputConfig={{
            onChange,
            testID: 'dateTimePicker',
            value: date,
            mode,
            is24Hour: true,
          }}
          showDatepicker={showDatepicker}
          showTimepicker={showTimepicker}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={cancelHandler}>Cancel</PrimaryButton>
        <PrimaryButton onPress={submitHandler}>{submitButtonLabel}</PrimaryButton>
      </View>
    </View>
  );
}

export default ToDoItemForm;
