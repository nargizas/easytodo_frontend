function DateTimePicker() {
    const [dte, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const showMode = (curr)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = newDAte(currentDate);
        let fDate = getFormattedDate(tempDate);
        let fTime = getFormattedTime(tempDate);

        setText(fDate + " " + fTime)

        console.log(fDate + " " + fTime)
    }

    return (
        <View>
            <Button onPress={showDatepicker} title="Date" />
            <Button onPress={showTimepicker} title="Time" />
            <Text>selected: {date.toLocaleString()}</Text>
        </View>
    )
}

export default DateTimePicker;

