/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import { View, StyleSheet } from 'react-native';
import {
  React, useLayoutEffect, useContext, useState,
} from 'react';
import GlobalStyles from '../constants/styles';
import IconButton from '../components/IconButton';
import { ToDoItemsContext } from '../store/todoitems-context';
import ToDoItemForm from '../components/AddITem/ToDoItemForm';
import { storeToDoItem, deleteToDoItem, updateToDoItem } from '../util/https';
import LoadingOverlay from '../components/LoadingOverlay';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1D7874',
  },
  deleteContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    marginVertical: 8,
  },
  inputContainer: {
    flex: 2,
  },
  textContainer: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    marginVertical: 8,
    elevation: 2,
  },
  wordText: {
    fontSize: 16,
  },
  customText: {
    color: '#a3a3a3',
    fontSize: 16,
  },
});

function AddItemScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toDoItemsCtx = useContext(ToDoItemsContext);

  const editedToDoItemId = route.params?.toDoItemId;
  const isEditing = !!editedToDoItemId;

  const selectedToDoItem = toDoItemsCtx.todoitems.find((toDoItem) => toDoItem.id === editedToDoItemId);

  const suggestedTitle = route.params?.suggestionTitle;

  const sid = route.params?.sid;
  // console.log(suggestedTitle);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit To-do item' : 'Add a new item',
    });
  }, [navigation, isEditing]);

  async function deleteToDoItemHandler() {
    setIsSubmitting(true);
    await deleteToDoItem(editedToDoItemId);
    toDoItemsCtx.deleteToDoItem(editedToDoItemId, sid);
    navigation.navigate('Dashboard', {
      sid,
    });
  }
  function cancelHandler() {
    navigation.navigate('Dashboard', {
      sid,
    });
  }

  async function confirmHandler(toDoItemData) {
    setIsSubmitting(true);
    if (isEditing) {
      toDoItemsCtx.updateToDoItem(editedToDoItemId, toDoItemData);
      await updateToDoItem(editedToDoItemId, toDoItemData, sid);
    } else {
      const id = await storeToDoItem(toDoItemData, sid);
      toDoItemsCtx.addToDoItem({ ...toDoItemData, id: id });
    }

    navigation.navigate('Dashboard', {
      sid,
    });
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.appContainer}>
      <ToDoItemForm suggestedTitle={suggestedTitle} submitButtonLabel={isEditing ? 'Edit' : 'Add'} cancelHandler={cancelHandler} confirmHandler={confirmHandler} defaultValues={selectedToDoItem} />
      {isEditing
                && (
                <View style={styles.deleteContainer}>
                  <IconButton icon="trash" color={GlobalStyles.colors.grey} size={36} onPress={deleteToDoItemHandler} />
                </View>
                )}
    </View>
  );
}

export default AddItemScreen;
