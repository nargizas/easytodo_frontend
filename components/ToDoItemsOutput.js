/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import {
  View, StyleSheet, Image, Text,
} from 'react-native';
import React from 'react';
import ToDoItemList from './ToDoItemList';

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  emptyListContainer: {
    marginVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'white',
    // borderWidth: 2,
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
    fontSize: 18,
    color: 'white',
  },
  smallerTextItem: {
    color: 'white',
  },
});

function emptyList() {
  return (
    <View style={styles.emptyListContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/empty.png')} resizeMode="center" style={styles.image} />
      </View>
      <Text style={styles.textItem}>Your list is empty!</Text>
      <Text style={styles.smallerTextItem}>Press &quot;+&quot; to add to-do</Text>
    </View>
  );
}

function ToDoItemsOutput({ toDoItems }) {
  // console.log(JSON.stringify(toDoItems))

  return (
    <View style={styles.itemsContainer}>
      <ToDoItemList toDoItems={toDoItems} emptyList={emptyList} />
    </View>
  );
}

export default ToDoItemsOutput;
