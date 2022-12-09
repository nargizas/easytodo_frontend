/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import React from 'react';
import GlobalStyles from '../../constants/styles';

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    fontSize: 18,
    elevation: 2,
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
  },
});

function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

export default Input;
