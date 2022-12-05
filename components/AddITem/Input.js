import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig }) {
    return (<View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...textInputConfig} style={styles.input} />
    </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#f5f5f5",
        fontSize: 18,
        elevation: 2
    },
    label: {
        fontSize: 18,
        color: GlobalStyles.colors.grey,
        marginBottom: 4,
    },
    inputContainer: {
        // flexDirection: 'column',
        marginHorizontal: 16,
        marginVertical: 8,
    }
});