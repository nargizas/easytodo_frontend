// import { useLinkProps } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        console.log('Pressed')
    }
    return (
        <Pressable onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#f5f5f5',
        borderRadius: 36,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        marginVertical: 24,
        marginHorizontal: 16,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        opacity: 54,
        textAlign: 'center'
    }
})