import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

function ContentView({ uri }) {
    return (
        <View>
            <WebView source={{ uri: uri }} userAgent={
                Platform.OS === "android"
                    ? "Chrome/18.0.1025.133 Mobile Safari/535.19"
                    : "AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75"
            } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
},
)

export default ContentView;