import { Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function LeftButton({ onPress }) {
    return <Pressable onPress={onPress}>
        <View>
            <AntDesign name="caretleft" size={24} color="#f5f5f5" />
        </View>
    </Pressable>
}

export default LeftButton;