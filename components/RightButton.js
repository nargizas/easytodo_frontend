/* eslint-disable react/prop-types */
import { Pressable, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

function RightButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <AntDesign name="caretright" size={24} color="#f5f5f5" />
      </View>
    </Pressable>
  );
}

export default RightButton;
