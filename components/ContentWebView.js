/* eslint-disable react/prop-types */
import React from 'react';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

function ContentView({ uri }) {
  return (
    <View>
      <WebView
        source={{ uri }}
        userAgent={
                Platform.OS === 'android'
                  ? 'Chrome/18.0.1025.133 Mobile Safari/535.19'
                  : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'
            }
      />
    </View>
  );
}

export default ContentView;
