import { Pressable, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from "../constants/styles";

function RightButton({ onPress }) {
    return <Pressable onPress={onPress}>
        <View>
            <AntDesign name="caretright" size={24} color="#f5f5f5" />
        </View>
    </Pressable>
}

export default RightButton;
