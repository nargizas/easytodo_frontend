/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import { Text, View, StyleSheet } from 'react-native';
import { React, useState, useContext } from 'react';
import AddFloatingButton from '../components/AddFloatingButton';
import ToDoItemsOutput from '../components/ToDoItemsOutput';
import LeftButton from '../components/LeftButton';
import RightButton from '../components/RightButton';
import { getFormattedDate } from '../util/date';
import { ToDoItemsContext } from '../store/todoitems-context';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1D7874',
    // alignContent: 'center',
    // justifyContent: 'center'
  },
  itemsContainer: {
    flex: 2,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // borderColor: 'white',
    // borderWidth: 2,
  },
  dateAndButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dateText: {
    color: '#f5f5f5',
    fontSize: 16,
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

function DashboardScreen({ route, navigation }) {
  const sid = route.params?.sid;

  const toDoItemsCtx = useContext(ToDoItemsContext);
  const [currDate, setCurrDate] = useState(new Date());

  function leftButtonPressHandler() {
    setCurrDate((currDateIn) => {
      const dateOffset = (24 * 60 * 60 * 1000);
      const myDate = new Date();
      myDate.setTime(currDateIn.getTime() - dateOffset);
      return myDate;
    });
  }
  function rightButtonPressHandler() {
    setCurrDate((currDateIn) => {
      const dateOffset = (24 * 60 * 60 * 1000);
      const myDate = new Date();
      myDate.setTime(currDateIn.getTime() + dateOffset);
      return myDate;
    });
  }

  // console.log(JSON.stringify(...DUMMY_TODOITEMS))
  function addPressHandler() {
    navigation.navigate('Suggestions', {
      sid,
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.dateAndButtonsContainer}>
        <LeftButton onPress={leftButtonPressHandler} />
        <Text style={styles.dateText}>{getFormattedDate(currDate)}</Text>
        <RightButton onPress={rightButtonPressHandler} />
      </View>
      <View style={styles.itemsContainer}>
        <ToDoItemsOutput toDoItems={toDoItemsCtx.todoitems.filter((obj) => getFormattedDate(obj.deadline) === getFormattedDate(currDate))} />
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

export default DashboardScreen;
