// import { useLinkProps } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: '#c7c7c7' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 36,
        marginVertical: 24,
        marginHorizontal: 16,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,

    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        opacity: 54,
        textAlign: 'center'
    }
})