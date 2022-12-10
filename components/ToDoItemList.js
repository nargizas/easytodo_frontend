/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import {
  View, FlatList, StyleSheet,
} from 'react-native';
import React from 'react';
// import { DUMMY_TODOITEMS } from "../data/dummy_data"
import ToDoItemCard from './ToDoItemCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 8,
    // borderColor: 'red',
    // borderWidth: 2,

  },
  toDoItemContainer: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
});

function renderToDoItem(toDoItemData, sid) {
  return (
    <ToDoItemCard sid={sid} curtoDoItemData={toDoItemData.item} />
  );
}

function ToDoItemList({ toDoItems, emptyList }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={toDoItems}
        renderItem={renderToDoItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={emptyList}
      />
    </View>
  );
}

export default ToDoItemList;
