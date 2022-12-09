/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import {
  View, Pressable, StyleSheet, Image,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 36,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#FFB800',
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 2,
  },
  image: {
    width: 32,
    height: 32,
  },
  pressed: {
    opacity: 0.75,
  },
});

function AddFloatingButton({ onPress }) {
  // eslint-disable-next-line global-require
  const imgSource = require('../assets/images/plus.png');
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)} onPress={onPress} android_ripple={{ color: '#ca9200' }}>
        <Image source={imgSource} resizeMode="center" style={styles.image} />
      </Pressable>
    </View>
  );
}

export default AddFloatingButton;
