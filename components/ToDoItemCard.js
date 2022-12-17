/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import {
  Pressable, View, Text, StyleSheet,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { React, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getFormattedTime } from '../util/date';
import { ToDoItemsContext } from '../store/todoitems-context';
import { updateToDoItem } from '../util/https';

const styles = StyleSheet.create({
  toDoItemContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  checkboxContainer: {
    marginRight: 8,
  },
  textItem: {
    fontSize: 16,
  },
  doneText: {
    color: 'green',
  },
  inProgressText: {
    color: 'orange',
  },
});

function ToDoItemCard({ sid, curtoDoItemData }) {
  const {
    id, title, deadline, status,
  } = curtoDoItemData;
  const toDoItemsCtx = useContext(ToDoItemsContext);
  const [isChecked, setChecked] = useState(status === 'DONE');
  const navigation = useNavigation();

  function toDoItemPressHandler() {
    navigation.navigate('AddItem', {
      toDoItemId: id,
      sid,
    });
  }

  async function onChange() {
    setChecked(!isChecked);
    // console.log(isChecked)
    const toDoItemData = {
      title,
      deadline,
      status: isChecked ? 'IN_PROGRESS' : 'DONE',
    };
    toDoItemsCtx.updateToDoItem(id, toDoItemData);
    await updateToDoItem(id, toDoItemData, sid);
  }

  return (
    <Pressable onPress={toDoItemPressHandler}>
      <View style={styles.toDoItemContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox style={{ width: 32, height: 32 }} value={isChecked} color="black" onValueChange={onChange} />
        </View>
        <View>
          <Text style={status === 'DONE' ? [styles.textItem, { textDecorationLine: 'line-through' }] : styles.textItem}>{title}</Text>
          <Text style={status === 'DONE' ? [styles.textItem, { textDecorationLine: 'line-through' }] : styles.textItem}>{getFormattedTime(deadline)}</Text>
          <Text style={status === 'DONE' ? [styles.textItem, styles.doneText] : [styles.textItem, styles.inProgressText]}>{status === 'DONE' ? 'Done' : 'In progress'}</Text>

        </View>
      </View>
    </Pressable>
  );
}

export default ToDoItemCard;
