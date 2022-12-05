import { Text, View, StyleSheet, Pressable } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { NavigationRouteContext } from '@react-navigation/native';

function SuggestionsScreen({ navigation }) {
    const [wordSuggestions, setWordSuggestions] = useState(["Do homework", "Work out", "Take a pill", "Call parents"])
    function suggestionPressHandler() {
        navigation.navigate("AddItem")
    }
    return (
        <View style={styles.appContainer}>
            <View >
                {wordSuggestions.map((word) =>
                    <Pressable onPress={suggestionPressHandler} key={word}>
                        <View style={styles.textContainer} >
                            <Text style={styles.wordText}>{word}</Text>
                        </View>
                    </Pressable>
                )}
            </View>
            <View style={styles.textContainer} >
                <Text style={styles.customText}>Custom...</Text>
            </View>
        </View>
    );
}

export default SuggestionsScreen;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        // flexDirection: 'column',
        padding: 16,
        backgroundColor: '#1D7874',
        alignContent: 'center',
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
    }
})