import { Button, View, Text, StyleSheet, Pressable } from 'react-native';
import { getFormattedDate, getFormattedDateAndTime, getFormattedTime } from "../../util/date";
import { useState } from 'react';
import { GlobalStyles } from "../../constants/styles";
import DateTimePicker from '@react-native-community/datetimepicker'
function DateTimeInput({ date, show, showDatepicker, showTimepicker, dateInputConfig }) {

    return (
        <View style={styles.inputContainer}>

            <Text style={styles.label}>Deadline</Text>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={showDatepicker} style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Pick date</Text>
                    </View>
                </Pressable>

                <Pressable onPress={showTimepicker} style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Pick time</Text>
                    </View>
                </Pressable>

            </View>
            <View style={styles.text}>
                <Text style={[styles.inputContainer, styles.buttonText, { color: GlobalStyles.colors.grey }]}>Selected: {getFormattedDateAndTime(date)}</Text>

            </View>
            {
                show && (
                    <DateTimePicker {...dateInputConfig} />
                )
            }
        </View >
    );
}

export default DateTimeInput;

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        color: GlobalStyles.colors.grey,
        marginBottom: 4,
    },
    inputContainer: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    buttonContainer: {
        flex: 1
    },
    button: {
        backgroundColor: GlobalStyles.colors.grey,
        paddingVertical: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 16,
    },
    buttonText: {
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    },
    text: {
        alignItems: 'center'
    }

});

