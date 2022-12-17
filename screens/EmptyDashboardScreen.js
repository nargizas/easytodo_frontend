/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import AddFloatingButton from '../components/AddFloatingButton';

const emptyImage = require('../assets/images/empty.png');

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1D7874',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
  itemsContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    margin: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  textItem: {
    textAlign: 'center',
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 2,
  },
  smallerTextItem: {
    textAlign: 'center',
    color: '#f5f5f5',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },
  bottomBar: {
    flexDirection: 'row',
    marginLeft: 32,
    marginRight: 16,
    justifyContent: 'center',
    alignContent: 'flex-end',
    marginBottom: 16,
  },
  selectedModeText: {
    flex: 1,
    color: '#f5f5f5',
    fontSize: 16,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  modeText: {
    flex: 1,
    color: '#a3a3a3',
    fontSize: 16,
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
});

function EmptyDashboardScreen({ navigation }) {
  function addPressHandler() {
    navigation.navigate('Suggestions');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.itemsContainer}>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} resizeMode="center" style={styles.image} />
        </View>
        <Text style={styles.textItem}>Your list is empty!</Text>
        <Text style={styles.smallerTextItem}>Press &quot;+&quot; to add to-do</Text>
      </View>
      <View style={styles.bottomBar}>
        <Text style={styles.selectedModeText}>Daily</Text>
        <Text style={styles.modeText}>Weekly</Text>
        <Text style={styles.modeText}>Monthly</Text>
        <AddFloatingButton onPress={addPressHandler} />
      </View>
    </View>
  );
}

export default EmptyDashboardScreen;
